import React from "react";
import axios from "./axios";

export const axiosfetch = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
