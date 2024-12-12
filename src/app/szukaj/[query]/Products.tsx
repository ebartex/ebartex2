import { FC } from "react";
import { Product } from "@/types/types"; // Zaimportuj wspólny typ
import Image from "next/image";
type ProductProps = {
  products: Product[]; // Tablica produktów
  query: string; // Dodaj 'query' do propsów
};

const Products: FC<ProductProps> = ({ products }) => {
  return (
    <div className="flex-1 bg-white p-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.tw_id} // Zakładając, że każdy produkt ma unikalne id
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800">{product.nazwa}</h3>
              <hr />
              <div className="flex">
              <div className="w-1/4">
              <Image
                width={100}
                height={100}
                src={product.photo_512 || "/products_thumbs.png"}
                alt={product.nazwa}
                className="w-32 h-32 object-cover"
                />
              </div>
              <div className="flex-1">
                test
              </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Brak produktów do wyświetlenia</p>
        )}
      </div>
    </div>
  );
};

export default Products;
