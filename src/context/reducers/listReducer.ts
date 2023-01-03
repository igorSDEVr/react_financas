import { ListType } from '../../types/ListType';
import { ReducerActionType } from '../../types/reducerActionType';
import { filterListByMonth } from '../../utils/filterListByMonth';
import { getCurrentMonth } from '../../utils/getCurrentMonth';

export const listInitialState: ListType = {
  actualDate: getCurrentMonth(),
  data: [{
      title: 'Mcdonalds',
      category: 'Alimentação',
      income: false,
      value: 10,
      date: new Date(2022, 11, 15),
  },
],
  filteredDataByMonth: [{
    title: '',
    category: '',
    income: false,
    value: 0,
    date: new Date(0, 0, 0)
  }]
};

enum actionType {
  getFilteredList = 'GET_FILTERED_LIST',
  changeDate = 'CHANGE_DATE',
  addItem = 'ADD_ITEM'
};

export const listReducer = (state: ListType, action: ReducerActionType) => {
  switch(action.type) {

    case actionType.getFilteredList:
      console.log('devo ser meio')
      const filteredList = filterListByMonth(state.data, state.actualDate);
      for(let i in filteredList) {
        state.filteredDataByMonth.push(filteredList[i]!);
      };
      console.log(filteredList)

      return state;

    case actionType.changeDate:
      const n = state.filteredDataByMonth.length;
      for(let i = 0; i < n; i++) {
        state.filteredDataByMonth.shift();
      };

      const currentMonth = state.actualDate;
      const[ yearString, monthString ] = currentMonth.split('-');
      const monthDate = parseInt(monthString);
      const nextDate = new Date(parseInt(yearString), monthDate - 1, 1);
  
      switch(action.payload.actualDate) {
        case 'prev':
          nextDate.setMonth(monthDate - 2);
          break;
        case 'next':
          nextDate.setMonth(monthDate);
          break;
      };
      const newDateString = `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}`
      return {...state, actualDate: newDateString};

      case actionType.addItem: {
        console.log('devo ser primeiro')
        const data = state.data;
        const newData = {
          title: action.payload.title,
          category: action.payload.category,
          income: action.payload.income,
          value: parseInt(action.payload.value),
          date: action.payload.date,
        }
        console.log(state)
        data.push(newData);
        // console.log(state)
        return state;
      }
		default:
      return state;
  };
};