import { useContext } from 'react';
import * as C from './styles';
import { Context } from '../../context/Context';
import { formatCurrentMonth } from '../../utils/formatCurrentMonth';
import { getIncomeAndExpense } from '../../utils/getIncomeAndExpense';
import { ResumeItem } from '../ResumeItem';
import { FilteredListType } from '../../types/FilteredListType';

export const InfoArea = () =>{
  const { state, dispatch } = useContext(Context);
  const data: FilteredListType[] = state.list.filteredDataByMonth;
  const { income, expense } = getIncomeAndExpense(data);
  
  const handleChangeMonth = (prevOrNext: string) => {
    dispatch({type: 'CHANGE_DATE', payload: {actualDate: prevOrNext}});
    dispatch({type: 'GET_FILTERED_LIST', payload: null})
  };

  return(
    <>
      <C.Container>
        <C.MonthArea>
            <C.MonthArrow onClick={() => handleChangeMonth('prev')}>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrentMonth(state.list.actualDate)}</C.MonthTitle>
            <C.MonthArrow onClick={() => handleChangeMonth('next')}>➡️</C.MonthArrow>
        </C.MonthArea>
        <C.ResumeArea>
            <ResumeItem title='Receitas' value={income} />
            <ResumeItem title='Despesas' value={expense}/>
            <ResumeItem 
                title='Balanço'
                value={income-expense}
                color={income - expense ? 'red' : 'green'}/>
        </C.ResumeArea>
      </C.Container>
    </>
  );
};