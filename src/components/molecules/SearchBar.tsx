import { BaseInput } from "../atoms";

const SearchBar = () => {
  return (
    <div className="py-2 px-4 relative border-b">
      <i className="absolute ri-search-line text-slate-500 text-lg left-6 top-[.85rem]"></i>
      <BaseInput placeholder="Search chat" className="pl-14" />
    </div>
  );
};

export default SearchBar;
