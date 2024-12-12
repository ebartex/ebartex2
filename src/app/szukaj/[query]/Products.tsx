import { FC } from "react";

const Products: FC = () => {
return(
    <div className="flex-1 bg-white p-4">
    <h2 className="text-xl font-bold mb-4">Wyniki wyszukiwania</h2>
    <div className="grid grid-cols-4 gap-4">
      <div className="border rounded p-2 shadow">Produkt 1</div>
      <div className="border rounded p-2 shadow">Produkt 2</div>
      <div className="border rounded p-2 shadow">Produkt 3</div>
      <div className="border rounded p-2 shadow">Produkt 4</div>
    </div>
  </div>
)
}
export default Products;