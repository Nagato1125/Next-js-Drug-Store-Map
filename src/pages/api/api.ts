import { Store } from "./types";

export const getAllStores = async (): Promise<Store[]> => {
  const res = await fetch("http://localhost:3001/stores", {
    cache: "no-store",
  }); // SSR
  const stores = res.json();

  return stores;
};
