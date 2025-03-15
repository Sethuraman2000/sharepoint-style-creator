
import { Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center animate-fade-in shadow-sm">
      <div className="flex items-center">
        <div className="text-2xl font-bold flex items-center text-gray-800">
          <span className="text-pmhub-green mr-2">PM</span> HUB
        </div>
        <p className="text-xs text-gray-500 ml-1 hidden sm:block">MASTER YOUR PROJECTS, LEAD WITH PRECISION</p>
      </div>
      
      <div className="relative w-72">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <select 
          className="block w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pmhub-green focus:border-transparent text-sm"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        >
          <option value="">Select Cost Code</option>
          <option value="CC1001">CC1001 - Infrastructure</option>
          <option value="CC1002">CC1002 - Software Development</option>
          <option value="CC1003">CC1003 - Research</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {searchValue && (
        <div className="absolute top-16 right-6 bg-white p-2 text-xs text-green-600 rounded shadow-md animate-slide-in">
          Filter applied
        </div>
      )}
    </header>
  );
};

export default Header;
