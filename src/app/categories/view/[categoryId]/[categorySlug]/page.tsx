'use client';
import Navbar from "@/common/components/Navbar";


import { useParams } from "next/navigation";

import FetchClient from "@/common/api/fetchApi";
import { useState, useEffect, useCallback } from "react";
import { Product } from "@/types/types"; // Zaimportuj wspólny typ
import Sidebar from "@/app/szukaj/[query]/Sidebar";
import Products from "@/app/szukaj/[query]/Products";
import BottomBar from "@/app/szukaj/[query]/BottomBar";
export default function Category() {


  const params = useParams<{ categoryId: string, categorySlug: string  }>();
  const xt_id = params?.categoryId ? decodeURIComponent(params.categoryId) : "";
  const slug = params?.categorySlug ? decodeURIComponent(params.categorySlug) : "";
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = useCallback(async () => {
    const client = FetchClient();

    try {
      const data = await client.get<{ Product: Product[] }>(`https://bapi.ebartex.pl/xt/format5.json?Xt-xt_id=${xt_id}`);
      setProducts(data.Product); // Zakładając, że odpowiedź zawiera pole 'products'
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []); // Dodajemy 'query' jako zależność, ponieważ fetchData zależy od query

  useEffect(() => {
    fetchData(); // Pobierz dane po załadowaniu komponentu
  }, [fetchData]); // Ponowne uruchomienie efektu, gdy fetchData się zmieni

  return (
    <div>
      <Navbar />
      <BottomBar query={slug} />
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Results */}
        <Products products={products} query={slug} />
      </div>
    </div>
  );
}
