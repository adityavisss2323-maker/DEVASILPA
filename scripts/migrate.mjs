import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 🚨 Replace these with your actual Sanity project details, or pass them as env variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN || 'YOUR_API_TOKEN'

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: '2024-05-01',
})

async function migrate() {
  if (projectId === 'YOUR_PROJECT_ID' || token === 'YOUR_API_TOKEN') {
    console.error('❌ Error: Missing Sanity Project ID or API Token.')
    console.error('Please set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN')
    process.exit(1)
  }

  console.log('Reading local db.json...')
  const dbPath = path.join(__dirname, '../app/data/db.json')
  const dbContent = JSON.parse(fs.readFileSync(dbPath, 'utf8'))
  const products = dbContent.products || []

  console.log(`Found ${products.length} products. Migrating to Sanity...`)

  for (const product of products) {
    console.log(`Migrating ${product.name}...`)
    
    // We are only migrating text data for now. Images will need to be uploaded manually 
    // to Sanity or via a more complex asset upload script if the images are local files.
    // Since images are currently just local paths (e.g. /products/bal-krishna/main.jpg),
    // Sanity won't automatically host them unless we use client.assets.upload().
    
    const doc = {
      _type: 'product',
      name: product.name,
      slug: { _type: 'slug', current: product.slug },
      category: product.category,
      status: product.status || 'published',
      featured: product.featured || false,
      type: product.type || 'in-stock',
      availabilityStatus: product.availabilityStatus || 'Made to Order',
      shortDescription: product.shortDescription,
      description: product.description,
      material: product.material,
      size: product.size,
      productionTime: product.productionTime,
      shipping: product.shipping,
      packing: product.packing,
      price: product.price,
      sizeOptions: product.sizeOptions || [],
      finishOptions: product.finishOptions || [],
    }

    try {
      const res = await client.create(doc)
      console.log(`✅ Created product document ID: ${res._id}`)
    } catch (err) {
      console.error(`❌ Failed to create product ${product.name}:`, err.message)
    }
  }

  console.log('Migration complete!')
}

migrate().catch(console.error)
