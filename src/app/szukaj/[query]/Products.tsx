import { FC } from "react";

type Product = {
    tw_id: number; // Zakładając, że tw_id jest typu string
    nazwa: string; // Zakładając, że nazwa jest typu string
    // Inne właściwości produktu, jeśli są dostępne
  };
  
  type ProductProps = {
    query: string;
    products: Product[]; // Zmieniamy na tablicę typu Product
  };

const Products: FC<ProductProps> = ({products }) => {
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
              <p className="text-gray-600 text-sm mt-2">{product.nazwa}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">{product.nazwa} zł</span>
                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600">
                  Dodaj do koszyka
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Brak produktów do wyświetlenia</p>
        )}
      </div>
    </div>
  );
}

export default Products;