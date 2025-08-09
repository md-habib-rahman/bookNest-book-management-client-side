import axios, { Axios } from "axios";
import React from "react";
const api = axios.create({ baseURL: "http://localhost:3000" });

const useAxiosInstance = () => {
  return api;
};

export default useAxiosInstance;
