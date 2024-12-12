import { FC } from "react";

const Sidebar: FC = () => {
return(
    <aside className="w-1/4 hidden md:block bg-gray-200 p-4 flex flex-col">
    <h2 className="text-lg font-bold mb-4">Filtry</h2>
    <ul className="space-y-2">
      <li>Filtr 1</li>
      <li>Filtr 2</li>
      <li>Filtr 3</li>
    </ul>
  </aside>
)
}
export default Sidebar; 