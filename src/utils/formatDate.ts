export const formatDate = (date: Date): string =>{
  let year: number = date.getFullYear();
  let month: number = date.getMonth() + 1;
  let day: number = date.getDay();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;