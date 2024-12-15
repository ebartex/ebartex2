import { FC, useState } from "react";
import { Product } from "@/types/types"; // Zaimportuj wspólny typ
import Image from "next/image";
import ProductDetails from "./ProductDetails";
import ListingView from "./ListingView";
import Link from "next/link";

type ProductProps = {
  products: Product[] | undefined; // Tablica produktów lub undefined
  query?: string; // Zapytanie wyszukiwania (opcjonalne)
};

const Products: FC<ProductProps> = ({ products = [], query = "" }) => {
  const [isGrid, setIsGrid] = useState(true); // Stan przełączania widoku (siatka vs lista)

  // Funkcja do przełączania widoku
  const toggleView = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div className="flex-1 bg-white p-4">
      {/* Navbar lub inne elementy globalne */}

      {products.length > 0 ? (
        <>
          {/* Przełącznik widoku */}
          <ListingView toggleView={toggleView} isGrid={isGrid} />

          {/* Wyświetlanie produktów w zależności od widoku */}
          <div
            className={`grid gap-4 mt-4 ${
              isGrid ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {products.map((product) => (
              <div
                key={product.tw_id}
                className={`bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow ${
                  !isGrid && "flex items-center space-x-4"
                }`}
              >
                {/* Obrazek */}
                <div
                  className={`${
                    isGrid ? "w-full" : "flex justify-center items-center w-1/4"
                  }`}
                >
                  <Link href={`/products/view/${product.tw_id}/${product.slug}`}>
                    <Image
                      width={256}
                      height={256}
                      src={product.photo_512 || "/products_thumbs.png"}
                      alt={product.nazwa}
                    />
                  </Link>
                </div>
                {/* Szczegóły */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.nazwa}
                  </h3>
                  <hr />
                  <ProductDetails product={product} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        // Komunikat, gdy brak produktów
        <div className="text-center mt-8">
          <p className="text-xl text-gray-500">
            Nie znaleziono produktów dla zapytania "{query}".
          </p>
          <p className="text-gray-500">Spróbuj ponownie z innym zapytaniem.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
