import { FC } from "react";

type ListingViewProps = {
  toggleView: () => void; // Funkcja do przełączania widoku
  isGrid: boolean; // Stan widoku
};

const ListingView: FC<ListingViewProps> = ({ toggleView, isGrid }) => {
  return (
    <div>
      {/* Przełącznik widoku */}
      <button
        onClick={toggleView}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isGrid ? "Widok listy" : "Widok siatki"}
      </button>
    </div>
  );
};

export default ListingView;
