import { IRootState } from "@/redux/store";
import { getYYYYMMDDFormat } from "@/utils/date";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useRangeWeek = () => {
  const storeWords = useSelector((state: IRootState) => state.words);
  const [rangeWeek, setRangeWeek] = useState<string[][]>([]);

  const getWeekRage = () => {
    const rangeWeekData: string[][] = [];
    const endDate = dayjs(getYYYYMMDDFormat(storeWords[0].createdAt));

    let firstDayOfWeek = dayjs(
      getYYYYMMDDFormat(storeWords[storeWords.length - 1].createdAt)
    ).day(0);

    while (firstDayOfWeek.isBefore(endDate) || firstDayOfWeek.isSame(endDate)) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(dayjs(firstDayOfWeek).day(i).format("YYYY-MM-DD"));
      }
      rangeWeekData.push(week);
      firstDayOfWeek = firstDayOfWeek.add(7, "days");
    }

    setRangeWeek(rangeWeekData.reverse());
  };

  useEffect(() => {
    if (storeWords.length > 0) getWeekRage();
  }, [storeWords]);

  return { rangeWeek };
};
