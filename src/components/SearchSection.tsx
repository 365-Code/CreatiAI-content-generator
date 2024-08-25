import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";

type SearchProps = {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

const SearchSection = ({ searchInput, setSearchInput }: SearchProps) => {
  return (
    <div
      className="p-10 shadow-sm border-b 
      bg-modern-slate
    flex flex-col justify-center items-center text-white rounded-lg"
    >
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="my-4 border max-w-[95%] w-[500px] flex items-center text-black bg-white p-2 rounded-md gap-2">
        <Search />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search Template"
          className="w-full outline-none border-none bg-transparent rounded-none"
        />
      </div>
    </div>
  );
};

export default SearchSection;
