import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0d401410721e40699a6ff2041864864c",
  },
});
