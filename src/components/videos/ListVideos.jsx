import React, { useContext } from "react";
import { VideoContext } from "../../apis/VideoContext";
import ListItem from "./ListItem";

const ListVideos = () => {
  let { videos } = useContext(VideoContext);
  console.log(videos);
  return (
    <div>
      {videos === null
        ? "loading"
        : videos.items.map(item => {
            return <ListItem key={item.id.videoId} {...item} id={item} />;
          })}
    </div>
  );
};

export default ListVideos;
