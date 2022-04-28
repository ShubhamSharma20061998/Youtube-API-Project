import { createContext, useEffect, useState } from "react";
import Axios, { baseParams } from "./Axios";
export let VideoContext = createContext();

let VideoProvider = ({ children }) => {
  let [videos, setVideos] = useState(null);
  let [loading, setLoading] = useState(false);
  let [onSelect, setOnSelect] = useState(null);
  let [showLogin, setShowLogin] = useState(false);

  useEffect(term => {
    searchText(term);
  }, []);

  let searchText = async term => {
    // console.log(term);
    let { data } = await Axios.get("/search", {
      params: {
        q: term,
        ...baseParams,
      },
    });
    setVideos(data);
    setOnSelect(data.items[0]);
    setLoading(true);
  };

  let handleClick = () => {
    setOnSelect(videos);
  };
  return (
    <VideoContext.Provider
      value={{
        searchText,
        videos,
        loading,
        handleClick,
        onSelect,
        setShowLogin,
        showLogin,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
export default VideoProvider;
