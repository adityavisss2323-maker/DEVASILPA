const fs = require('fs');
const path = require('path');

// Read the existing products.ts
const tsFilePath = path.join(__dirname, '../app/data/products.ts');
let tsContent = fs.readFileSync(tsFilePath, 'utf-8');

// A very hacky way to extract the array, since we know it's a simple export const products = [...]
// We'll just run it in a sandbox.
// Strip out other exports so the eval doesn't fail
tsContent = tsContent.split('export function getProductBySlug')[0];

const script = `
  const exports = {};
  ${tsContent.replace('export const products', 'exports.products')}
  return exports.products;
`;

const products = new Function(script)();

const dbPath = path.join(__dirname, '../app/data/db.json');
fs.writeFileSync(dbPath, JSON.stringify({ products }, null, 2), 'utf-8');
console.log('Successfully seeded db.json with ' + products.length + ' products.');
