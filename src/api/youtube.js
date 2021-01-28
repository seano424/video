import axios from "axios";
const KEY = 'AIzaSyCprSUk51477DbFz0EOt7S7wt7ia_G4RMk'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  },
});
