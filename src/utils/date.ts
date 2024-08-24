import dayjs from "dayjs";

export const getYYYYMMDDFormat = (date: string): string => {
  return dayjs(date).format("YYYY-MM-DD");
};
