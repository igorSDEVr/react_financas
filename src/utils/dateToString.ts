export const dateToString = (date: string) => {
  const [year, month, day] = date.split('-');
  const newDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return newDate;
};