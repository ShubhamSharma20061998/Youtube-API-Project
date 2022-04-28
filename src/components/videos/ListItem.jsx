import React, { useContext } from "react";
import Moment from "react-moment";
import { VideoContext } from "../../apis/VideoContext";
const ListItem = ({ snippet,id }) => {
  let { handleClick } = useContext(VideoContext);
  let { publishedAt, channelId, title, description, thumbnails, channelTitle } =
    snippet;
  return (
    <div className="thumbnails flex" onClick={() => handleClick(id)}>
      <figure className="basis-[40%]">
        <img src={thumbnails.medium.url} alt={title} className="p-1 pr-2" />
      </figure>
      <main className="basis-[60%]">
        <h3>{title.slice(0, 25) + "...."}</h3>
        <h5>{channelTitle}</h5>
        <p>
          <Moment fromNow>{publishedAt}</Moment>
        </p>
      </main>
    </div>
  );
};

export default ListItem;
