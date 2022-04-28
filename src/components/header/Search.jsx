import React, { useContext, useState } from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { VideoContext } from "../../apis/VideoContext";

const Search = () => {
  let { searchText } = useContext(VideoContext);
  let [state, setState] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    try {
      setState(searchText(state));
      console.log(state);
    } catch (error) {
      console.log(error);
    }
    setState("");
  };

  return (
    <div className="basis-[45%] mt-3 ">
      <form className="flex items-center" onSubmit={handleSubmit}>
        <span className="w-[80%]">
          <input
            type="text"
            placeholder="Search"
            value={state}
            onChange={e => {
              setState(e.target.value);
            }}
            className="border-2 p-2 rounded-sm w-[100%] shadow-sm"
          />
        </span>
        <span className="w-[8%] text-center bg-gray-100 border-2">
          <button className="w-[50px] p-3">
            <FaSearch />
          </button>
        </span>
        <span className="w-[10%] flex justify-center text-lg bg-gray-50 rounded-[100%] p-4 h-15">
          <FaMicrophone className="text-center" />
        </span>
      </form>
    </div>
  );
};

export default Search;
