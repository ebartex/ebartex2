'use client';
import Navbar from "@/common/components/Navbar";
import Sidebar from "./Sidebar";
import Products from "./Products";
import { useParams } from "next/navigation";
import BottomBar from "./BottomBar";
import FetchClient from "@/common/api/fetchApi";
import { useState, useEffect, useCallback } from "react";
import { Product } from "@/types/types"; // Zaimportuj wspólny typ
export default function Home() {


  const params = useParams<{ query: string }>();
  const query = params?.query ? decodeURIComponent(params.query) : "";
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = useCallback(async () => {
    const client = FetchClient();

    try {
      const data = await client.get<{ Product: Product[] }>(`https://bapi.ebartex.pl/products/format5.json?Product-nazwa=?${query}?&Product&Product-cenad=!0.0`);
      setProducts(data.Product); // Zakładając, że odpowiedź zawiera pole 'products'
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [query]); // Dodajemy 'query' jako zależność, ponieważ fetchData zależy od query

  useEffect(() => {
    fetchData(); // Pobierz dane po załadowaniu komponentu
  }, [fetchData]); // Ponowne uruchomienie efektu, gdy fetchData się zmieni

  return (
    <div>
      <Navbar />
      <BottomBar query={query} />
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Results */}
        <Products products={products} query={query} />
      </div>
    </div>
  );
}
