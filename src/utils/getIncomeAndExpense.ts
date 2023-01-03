import { FilteredListType } from '../types/FilteredListType';

export const getIncomeAndExpense = (filteredList: FilteredListType[]) => {

  let income = 0;
  let expense = 0;

  for(let i in filteredList) {
    if(filteredList[i]?.income){
      income += filteredList[i]!.value;
    }else{
      expense += filteredList[i]!.value;
    }
  };
  
  return { income, expense };
};