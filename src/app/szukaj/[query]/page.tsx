"use client";

import Navbar from "@/common/components/Navbar";
import Sidebar from "./Sidebar";
import Products from "./Products";
import { useParams } from "next/navigation";
import BottomBar from "./BottomBar";
import FetchClient from "@/common/api/fetchApi";
import { useState, useEffect } from "react";

export default function Home() {
  type Product = {
    nazwa: string;
    // inne właściwości produktu, które mogą być w odpowiedzi
  };

  const params = useParams<{ query: string }>();
  const query = params?.query ? decodeURIComponent(params.query) : "";
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    const client = FetchClient();

    try {
      const data = await client.get<{ Product: Product[] }>(`https://bapi.ebartex.pl/products/format5.json?Product-nazwa=?${query}?`);

      setProducts(data.Product); // Zakładając, że odpowiedź zawiera pole 'products'
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Pobierz dane po załadowaniu komponentu
  }, [query]); // Zmiana zapytania powoduje ponowne pobranie danych

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
