"use client";

import { useState, useEffect } from "react";
import { Product } from "@/app/lib/db";
import Navbar from "@/app/components/Navbar";

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this product?")) return;
    await fetch(`/api/admin/products?id=${id}`, { method: 'DELETE' });
    setProducts(products.filter(p => p.id !== id));
  }

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />
      
      <section className="section-x" style={{ paddingTop: "120px", paddingBottom: "60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40 }}>
          <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 64px)", color: "var(--text)" }}>
            Inventory Admin
          </h1>
          <button style={{ background: "var(--gold)", color: "var(--black)", padding: "12px 24px", border: "none", cursor: "pointer", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.15em" }}>
            Add New Product
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--gold-line-2)", color: "var(--text-3)" }}>
                  <th style={{ padding: "16px 8px", fontWeight: 400 }}>ID</th>
                  <th style={{ padding: "16px 8px", fontWeight: 400 }}>Name</th>
                  <th style={{ padding: "16px 8px", fontWeight: 400 }}>Category</th>
                  <th style={{ padding: "16px 8px", fontWeight: 400 }}>Featured</th>
                  <th style={{ padding: "16px 8px", fontWeight: 400 }}>Status</th>
                  <th style={{ padding: "16px 8px", fontWeight: 400 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "16px 8px", color: "var(--text-3)" }}>{product.id}</td>
                    <td style={{ padding: "16px 8px" }}>{product.name}</td>
                    <td style={{ padding: "16px 8px", color: "var(--text-2)" }}>{product.category}</td>
                    <td style={{ padding: "16px 8px" }}>{product.featured ? 'Yes' : 'No'}</td>
                    <td style={{ padding: "16px 8px" }}>{product.availabilityStatus || 'Available'}</td>
                    <td style={{ padding: "16px 8px" }}>
                      <button style={{ background: "transparent", color: "var(--gold)", border: "none", cursor: "pointer", marginRight: 16 }}>Edit</button>
                      <button onClick={() => handleDelete(product.id)} style={{ background: "transparent", color: "#ff4444", border: "none", cursor: "pointer" }}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}