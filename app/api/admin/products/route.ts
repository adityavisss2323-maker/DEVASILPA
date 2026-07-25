import { NextResponse } from 'next/server';
import { getProducts, saveProducts, Product } from '@/app/lib/db';
import { revalidatePath } from 'next/cache';

export async function GET() {
  const products = getProducts();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  try {
    const body: Product = await req.json();
    const products = getProducts();
    
    // Assign new ID
    const maxId = products.reduce((max, p) => Math.max(max, p.id), 0);
    body.id = maxId + 1;
    
    products.push(body);
    saveProducts(products);
    
    // Revalidate paths
    revalidatePath('/');
    revalidatePath('/collections');
    
    return NextResponse.json(body, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body: Product = await req.json();
    const products = getProducts();
    const index = products.findIndex(p => p.id === body.id);
    
    if (index === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    products[index] = { ...products[index], ...body };
    saveProducts(products);
    
    // Revalidate paths
    revalidatePath('/');
    revalidatePath('/collections');
    revalidatePath(`/product/${body.slug}`);
    
    return NextResponse.json(products[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '0', 10);
    
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
    
    let products = getProducts();
    const product = products.find(p => p.id === id);
    products = products.filter(p => p.id !== id);
    saveProducts(products);
    
    revalidatePath('/');
    revalidatePath('/collections');
    if (product) {
      revalidatePath(`/product/${product.slug}`);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
