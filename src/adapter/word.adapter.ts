import { WordEntity } from "@/types/types";

export const wordAdapter = (data: WordEntity[]) => {
  return data.map((obj) => ({
    ...obj,
    open: false,
  }));
};
