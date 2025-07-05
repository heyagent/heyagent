"use client";

import { useEffect, useState, useCallback } from "react";
import { FiSearch, FiX } from "react-icons/fi";

interface ChangelogSearchProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

export default function ChangelogSearch({ onSearch, placeholder = "Search changelog..." }: ChangelogSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Trigger search when debounced term changes
  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleClear = useCallback(() => {
    setSearchTerm("");
    setDebouncedSearchTerm("");
  }, []);

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 px-4 ps-12 pe-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-slate-900 dark:text-gray-100 rounded-md focus:border-amber-400 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-gray-500"
          placeholder={placeholder}
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 end-0 flex items-center pe-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Clear search"
          >
            <FiX className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}