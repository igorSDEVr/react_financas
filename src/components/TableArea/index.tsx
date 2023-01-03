import { useContext } from 'react';
import * as C from './styles';
import { Context } from '../../context/Context';
import { TableItem } from '../TableItem/';
import { FilteredListType } from '../../types/FilteredListType';

export const TableArea = () => {
  const { state } = useContext(Context);
  const filteredList: FilteredListType[] = state.list.filteredDataByMonth;

  if(filteredList[0]?.title === '' || filteredList.length === 0) {
    filteredList.shift();
  };

  console.log(filteredList)
  return (
    <>
      <C.Table>
        <thead>
          <tr>
            <C.TableHeadColumn width={ 100 }>Data</C.TableHeadColumn>
            <C.TableHeadColumn width={ 130 }>Categoria</C.TableHeadColumn>
            <C.TableHeadColumn>Titulo</C.TableHeadColumn>
            <C.TableHeadColumn width={ 150 }>Valor</C.TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((item, index)=>(
            <TableItem key={index} item={item} index={index} />
          ))}
        </tbody>
      </C.Table>
    </>
  );
};