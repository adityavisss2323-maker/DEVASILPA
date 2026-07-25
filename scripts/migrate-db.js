const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'app', 'data', 'db.json');
const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 1. Update existing products
data.products = data.products.map(p => {
  return {
    ...p,
    type: "in-stock",
    availabilityStatus: "Made to Order",
    sizeOptions: [p.size], // default to the existing size string
    finishOptions: ["Antique Brass", "Polished Brass"]
  };
});

// 2. Add concept products for missing categories
const concepts = [
  {
    id: 101,
    slug: "concept-shiva-parvati",
    name: "Shiva Parvati Family (Concept)",
    category: "Shiva Family",
    shortDescription: "A grand depiction of Lord Shiva and Goddess Parvati.",
    description: "This is a conceptual preview of our upcoming Shiva Family masterpiece. The final piece will be meticulously hand-finished by our artisans in Shajapur.",
    material: "Premium Brass / Copper",
    size: "Custom Sizes Available",
    productionTime: "45 - 60 Days",
    shipping: "Worldwide Shipping Available",
    packing: "Export Grade Secure Packaging",
    price: "Price on Request",
    images: ["/placeholder"],
    featured: false,
    type: "concept",
    availabilityStatus: "Available on Request",
    sizeOptions: ["12 inches", "24 inches"],
    finishOptions: ["Antique Brass", "Bronze Finish"]
  },
  {
    id: 102,
    slug: "concept-saraswati",
    name: "Goddess Saraswati (Concept)",
    category: "Divine Collection",
    shortDescription: "A conceptual design of Goddess Saraswati with her Veena.",
    description: "This is a conceptual preview. The final piece will capture the serene grace of the Goddess of Knowledge.",
    material: "Premium Brass",
    size: "Custom Sizes Available",
    productionTime: "30 - 45 Days",
    shipping: "Worldwide Shipping Available",
    packing: "Export Grade Secure Packaging",
    price: "Price on Request",
    images: ["/placeholder"],
    featured: false,
    type: "concept",
    availabilityStatus: "Available on Request",
    sizeOptions: ["15 inches", "18 inches"],
    finishOptions: ["Antique Brass"]
  },
  {
    id: 103,
    slug: "concept-kirtimukha",
    name: "Kirtimukha Wall Mask (Concept)",
    category: "Wall Décor",
    shortDescription: "A traditional guardian face mask for temple and home entrances.",
    description: "This is a conceptual preview of our heritage wall decor collection.",
    material: "Premium Brass",
    size: "Custom Sizes Available",
    productionTime: "20 - 30 Days",
    shipping: "Worldwide Shipping Available",
    packing: "Export Grade Secure Packaging",
    price: "Price on Request",
    images: ["/placeholder"],
    featured: false,
    type: "concept",
    availabilityStatus: "Available on Request",
    sizeOptions: ["8 inches", "12 inches"],
    finishOptions: ["Antique Brass"]
  },
  {
    id: 104,
    slug: "concept-shankha-stand",
    name: "Ornate Shankha Stand (Concept)",
    category: "Ritual & Temple",
    shortDescription: "A deeply carved brass stand for the sacred conch.",
    description: "Conceptual preview of our upcoming ritual accessories collection.",
    material: "Premium Brass",
    size: "Custom Sizes Available",
    productionTime: "15 - 25 Days",
    shipping: "Worldwide Shipping Available",
    packing: "Export Grade Secure Packaging",
    price: "Price on Request",
    images: ["/placeholder"],
    featured: false,
    type: "concept",
    availabilityStatus: "Available on Request",
    sizeOptions: ["Standard"],
    finishOptions: ["Antique Brass", "Polished Brass"]
  },
  {
    id: 105,
    slug: "concept-royal-bust",
    name: "Maharaja Heritage Bust (Concept)",
    category: "Busts & Decorative",
    shortDescription: "A commanding bust capturing royal Indian heritage.",
    description: "Conceptual preview of our upcoming portraiture and bust collection.",
    material: "Premium Brass",
    size: "Custom Sizes Available",
    productionTime: "40 - 60 Days",
    shipping: "Worldwide Shipping Available",
    packing: "Export Grade Secure Packaging",
    price: "Price on Request",
    images: ["/placeholder"],
    featured: false,
    type: "concept",
    availabilityStatus: "Available on Request",
    sizeOptions: ["14 inches", "20 inches"],
    finishOptions: ["Antique Brass", "Bronze Finish"]
  }
];

data.products.push(...concepts);

fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
console.log("Migration complete.");
