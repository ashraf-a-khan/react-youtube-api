import axios from "axios";

const KEY = "AIzaSyAQEtRM1C2w2LHiKWaKAIA8jOVP6xXde6E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
