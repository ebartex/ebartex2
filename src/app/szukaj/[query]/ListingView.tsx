import { FC } from "react";
import { LayoutGrid, List } from "lucide-react"; // Import ikon

type ListingViewProps = {
  toggleView: (view: string) => void; // Funkcja do przełączania widoku
  isGrid: boolean; // Stan widoku
};

const ListingView: FC<ListingViewProps> = ({ toggleView, isGrid }) => {
  return (
    <div className="bg-white text-gray-500 rounded-md text-sm border border-sky-700 inline-flex p-2 space-x-2">
      <button
        onClick={() => toggleView("grid")}
        className={`focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 transition-all duration-300 ease-in-out active:bg-sky-300 hover:bg-slate-200 inline-flex items-center focus:outline-none rounded-md px-4 py-2 ${
          isGrid ? "bg-slate-200 text-slate-700" : "text-slate-500"
        }`}
        id="grid"
      > <LayoutGrid className="w-6 h-6" />
   
      </button>
      <button
        onClick={() => toggleView("list")}
        className={`focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 transition-all duration-300 ease-in-out active:bg-sky-300 hover:bg-slate-200 inline-flex items-center focus:outline-none rounded-md px-4 py-2 ${
          !isGrid ? "bg-slate-200 text-slate-700" : "text-slate-500"
        }`}
        id="list"
      >
        <List className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ListingView;
