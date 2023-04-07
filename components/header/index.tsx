import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
type Props = {};

const index = (props: Props) => {
  return (
    <header className="md:fixed left-0 right-0 top-0 md:bg-palette-fill shadow-sm pt-4 z-[1000]">
      <div className="flex flex-col md:px-4 mb-2">
        <div className="flex items-center justify-center md:order-2 md:mt-2 relative ">
          {/* Menu Goes Here */}
          <div className="md:hidden">
            <Logo />
          </div>
          {/* Settings Goes Here */}
        </div>
        <hr className="md:hidden" />
        <div className="mb-2 mt-4 md:mt-0 flex items-center md:order-1">
          {/* For Logo */}
          <div className="hidden md:block">
            <Logo />
          </div>
          {/* For Search Bar */}
          <div className="flex-grow">
            <SearchBar />
          </div>
          {/* User Box */}
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default index;
