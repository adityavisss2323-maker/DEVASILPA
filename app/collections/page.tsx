import { getProducts } from "@/app/lib/db";
import CollectionsClient from "./CollectionsClient";

export const revalidate = 3600;

export default function CollectionsPage() {
  const products = getProducts();
  return <CollectionsClient products={products} />;
}