import axios from "axios";

const KEY = "AIzaSyC8A97EW1Y-5mSrvNDdTo2tpU2zhziNzAE";
export let baseParams = {
  key: KEY,
  maxResults: 10,
  part: "snippet",
};
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  headers: {
    "content-type": "application/json",
  },
});
