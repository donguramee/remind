import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4967e6f1bcff9aad22693a98d7ec4baf",
    language: "ko-KR",
  },
});

export default instance;
