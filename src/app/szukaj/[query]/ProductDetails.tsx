import { FC } from "react";
import { Product } from "@/types/types"; // Zaimportuj wspólny typ
import Link from "next/link";


type ProductDetailsProps = {
  product: Product; // Pojedynczy produkt
};
const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="flex-1 bg-white p-4">
        <span>Kategoria:</span> <span><Link href={`/categories/view/${product.xt_id}/${product.slug_kategoria}`}>{product.kategoria}</Link></span>
        <div className="flex items-center space-x-1">
        {product.marka ? (
            <span>Marka: {product.marka}</span>
          ) : product.producent ? (
            <span>Producent: {product.producent}</span>
          ) : null}
        </div>
        {product.stan > 0 ? (
        // Dostępność: w magazynie
        <div className="flex items-center space-x-1">
          <span>Dostępność:</span> 
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="">w magazynie</span>
        </div>
        ) : (
        // Dostępność: brak w magazynie
        <div className="flex items-center space-x-1">
          <span>Dostępność:</span> 
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="">brak w magazynie</span>
        </div>          
        )}
    </div>
  );
};

export default ProductDetails;
