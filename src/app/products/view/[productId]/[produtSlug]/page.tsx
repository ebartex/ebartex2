'use client';
import FetchClient from '@/common/api/fetchApi';
import { useParams } from 'next/navigation';
import { Product } from "@/types/types"; // Zaimportuj wspólny typ
import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '@/common/components/Navbar';
import Image from 'next/image';
import ProductDetails from '@/app/szukaj/[query]/ProductDetails';
function ProductComponent() {
    const params = useParams<{ productId: string, productSlug: string }>();
    const tw_id = params.productId;

    // Zmieniamy stan na pojedynczy produkt lub null
    const [product, setProduct] = useState<Product | null>(null);

    // Funkcja do pobierania danych
    const fetchData = useCallback(async () => {
        const client = FetchClient();

        try {
            const data = await client.get<{ Product: Product[] }>(
                `https://bapi.ebartex.pl/products/format5.json?Product-tw_id=${tw_id}`
            );

            if (data.Product.length > 0) {
                setProduct(data.Product[0]); // Ustaw pierwszy (i jedyny) produkt
            } else {
                console.error("Nie znaleziono produktu.");
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }, [tw_id]);

    // Wywołanie pobierania danych po załadowaniu komponentu
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Renderowanie komponentu
    return (
      <div>
        <Navbar />
        {product ? (
          <div 
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow flex"
          >
            {/* Obrazek */}
            <div className="w-1/4 flex justify-center items-center">
              <Image
                width={256}
                height={256}
                src={product.photo_512 || "/products_thumbs.png"}
                alt={product.nazwa}
                className="rounded-lg"
              />
            </div>
            {/* Szczegóły */}
            <div className="flex-1 pl-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.nazwa}</h3>
             
              <ProductDetails product={product} />
            </div>
          </div>
        ) : (
          <p>Ładowanie produktu...</p>
        )}
      </div>
    );
    
}

export default ProductComponent;
