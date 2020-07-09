import axios from "axios";
import { BaseURL } from "./constants";

export const axiosInstance = axios.create({
  baseURL: BaseURL,
});
