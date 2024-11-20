import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "044df7c6eb94495691d91c32b93f3d7c",
  },
});
