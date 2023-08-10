import React from "react";

const SearchInput = () => {
  return (
    <main>
      <div className="flex flex-col justify-start items-start gap-2 mb-4">
        
        <input
          type="text"
          className="w-72 md:w-80 lg:w-96 md:h-12 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1"
          placeholder=" Search Jobs Here ..."
        />
      </div>
    </main>
  );
};

export default SearchInput;
