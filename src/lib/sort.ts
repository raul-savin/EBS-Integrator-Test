import { Titem } from "@/types";

export const sortToHigh = (data: Titem[]) =>
  data.sort((a, b) => b.price - a.price);

export const sortToLow = (data: Titem[]) =>
  data.sort((a, b) => a.price - b.price);
