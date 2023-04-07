import React from "react";
import { GoSearch } from "react-icons/go";
type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="max-w-[50rem] w-full md:w-[90%] px-4 flex items-center flex-grow md:ml-4 bg-slate-600/10 rounded-lg">
      {/* <div> */}
      <GoSearch />
      <input
        type="text"
        className="px-4 py-2 md:py-3 bg-transparent focus:outline-none w-full"
      />
      {/* </div> */}
    </div>
  );
};

export default SearchBar;
