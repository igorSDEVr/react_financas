import { FilteredListType } from '../types/FilteredListType';

export const filterListByMonth = (list: FilteredListType[], actualDate: string) => {
    const filteredList: FilteredListType[] = [null];
    const currentMonth = actualDate;
 
    const [yearString, monthString] = currentMonth.split('-');
    if(filteredList[0] === null) filteredList.shift();
      for(let i in list){
        if
        (
            list[i]?.date.getFullYear() === parseInt(yearString)&&
            (list[i]!.date.getMonth() + 1) === parseInt(monthString)
        ){
            filteredList.push(list[i]);
        };
      };

    return filteredList;
};