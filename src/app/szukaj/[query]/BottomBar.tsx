import { FC } from "react";
type ProductProps = {
    query: string
}


const BottomBar: FC<ProductProps> = ({query}) => {
return(
    <div className="flex-1 bg-white p-4">
    <h2 className="text-xl font-bold mb-4">Wyniki wyszukiwania dla: {query}</h2>
    </div>
)
}
export default BottomBar;