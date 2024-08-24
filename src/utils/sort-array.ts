type TSort = "ASC" | "DESC";

export const sortData = (
  array: any[],
  key: string,
  type: TSort = "ASC",
  date: boolean = false
) => {
  if (date) {
    return array.sort((a, b) => {
      if (type === "ASC") {
        return new Date(b[key]).getTime() - new Date(a[key]).getTime();
      } else {
        return new Date(a[key]).getTime() - new Date(b[key]).getTime();
      }
    });
  } else {
    return array.sort((a, b) => {
      if (type === "ASC") {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      } else {
        if (a[key] < b[key]) {
          return 1;
        }
        if (a[key] > b[key]) {
          return -1;
        }
        return 0;
      }
    });
  }
};
