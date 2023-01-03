import * as C from './styles';
import { formatDate } from '../../utils/formatDate';
import { FilteredListType } from '../../types/FilteredListType';

type Props ={
    item: FilteredListType;
    index: number;
};

export const TableItem = ({ item }: Props) => {
  return (
      <C.TableLine>
        <C.TableColumn>{formatDate(item!.date)}</C.TableColumn>
        <C.TableColumn>
            <C.Category color={item?.income ? '#006400' : '#FF0000'}>{item!.category}</C.Category>
        </C.TableColumn>
        <C.TableColumn>{item!.title}</C.TableColumn>
        <C.TableColumn>
            <C.Value color={item?.income ? '#006400' : '#FF0000'}>R$ {item!.value}</C.Value>
        </C.TableColumn>
      </C.TableLine>
  );
};