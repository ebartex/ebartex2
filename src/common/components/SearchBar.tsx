'use client';
import { useState, useRef } from "react";
import { Search, X } from "lucide-react";
import { useParams, useRouter} from "next/navigation"; 

const SearchBar: React.FC = () => {
    const params = useParams(); // Pobranie wszystkich parametrów
    const query = params.query; // Pobranie konkretnego parametru 'query'

    const [inputValue, setInputValue] = useState(decodeURIComponent(query ? decodeURIComponent(query as string) : '')); // Ustawienie początkowej wartości inputu
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            router.push(`/szukaj/${encodeURIComponent(inputValue.trim())}`);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const clearInput = () => {
        setInputValue("");
        inputRef.current?.focus();
    };

    return (
        <div className="relative w-full">
            <form onSubmit={handleSearchSubmit} className="w-full">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Szukaj..."
                    value={inputValue}
                    onChange={handleInputChange}
                    className={`transition-all focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:outline-none pl-6 pr-10 block w-full h-10 rounded-md text-sm border border-sky-700 border-1  ${
                    // className={`focus:ring-2 focus:ring-sky-600 focus:ring-offset-1 focus:outline-none bg-white h-10 px-4 text-sm border border-gray-300 rounded-md focus:outline-none ${
                  inputValue ? "bg-white" : "bg-slate-100 hover:bg-white"
                    }`}
                />
                {/* Ikona krzyżyka - widoczna tylko, gdy jest tekst */}
                {inputValue && (
                    <button
                        type="button" // Ensure this is a button that doesn't submit the form
                        onClick={clearInput}
                        className="absolute inset-y-0 right-12 flex items-center text-sky-700 hover:text-sky-900"
                        aria-label="Wyczyść"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}
                {/* Ikona lupy - zawsze widoczna */}
                <button
                    type="submit" // Make sure this button submits the form
                    className="absolute inset-y-0 right-3 flex items-center text-sky-700 hover:text-sky-900"
                    aria-label="Szukaj"
                >
                    <Search className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
