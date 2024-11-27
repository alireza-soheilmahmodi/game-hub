import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "71dea0e2cecf4a80931f8ccea7a2e3d4",
  },
});
