import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  query: string;
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="relative w-full max-w-md">
        <Search className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => onSearch(e.target.value)}
          className="search-input w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default SearchBar;
