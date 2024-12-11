'use client';
import { useState, useRef } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation"; 

const SearchBar: React.FC = () => {
    const searchParams = useSearchParams();
    const initialSearchTerm = searchParams.get('q') || ''; // Pobranie wartości parametru 'q' z URL    
    const [inputValue, setInputValue] = useState(initialSearchTerm);
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
                    className={`pl-6 pr-10 block w-full h-10 rounded-full text-sm border border-sky-700 border-2 focus:outline-none ${
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
