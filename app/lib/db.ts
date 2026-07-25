import fs from 'fs';
import path from 'path';

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  material: string;
  size: string;
  productionTime: string;
  shipping: string;
  packing: string;
  price: string;
  images: string[];
  featured: boolean;
  type: 'in-stock' | 'concept';
  availabilityStatus?: 'In Stock' | 'Made to Order' | 'Available on Request';
  sizeOptions?: string[];
  finishOptions?: string[];
}

const dbPath = path.join(process.cwd(), 'app', 'data', 'db.json');

export function getProducts(): Product[] {
  try {
    if (!fs.existsSync(dbPath)) return [];
    const data = fs.readFileSync(dbPath, 'utf8');
    const parsed = JSON.parse(data);
    return parsed.products || [];
  } catch (err) {
    console.error("Failed to read db.json", err);
    return [];
  }
}

export function getProductBySlug(slug: string): Product | undefined {
  const products = getProducts();
  return products.find(p => p.slug === slug);
}

export function saveProducts(products: Product[]) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify({ products }, null, 2), 'utf8');
  } catch (err) {
    console.error("Failed to write to db.json", err);
    throw err;
  }
}
