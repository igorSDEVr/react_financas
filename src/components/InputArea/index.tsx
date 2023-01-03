import { useState, useContext, FormEvent, useEffect } from 'react';
import * as C from './styled';
import { Context } from '../../context/Context';
import { dateToString } from '../../utils/dateToString';

export const InputArea = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [value, setValue] = useState('');

  const { dispatch } = useContext(Context);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleChecked = () => {
    if(checkbox === true) {
      setCheckbox(false)
    }else {
      setCheckbox(true)
    }
  };

  const updateList = () => {
    dispatch({type: 'GET_FILTERED_LIST', payload: null});
  };

  const handlePayloadDatas = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        title: title,
        category: category,
        income: checkbox,
        value: value,
        date: dateToString(date)
      }
    });
    
    setShowModal(false);
    updateList();
  };

  return (
    <C.Container>
      <C.Button onClick={handleOpenModal}>Adicionar</C.Button>
      <C.Modal show={showModal}>
        <C.ModalArea onSubmit={handlePayloadDatas}>

          <C.TextArea>
            <C.InputOfText 
              type='text'
              placeholder='Digite o nome'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <C.InputOfText
              type='text'
              placeholder='Digite a categoria'
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </C.TextArea>

          <C.DateArea>
            <C.LabelDate>Escolha a data</C.LabelDate>
            <C.InputOfDate
              id='date'
              type='date'
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </C.DateArea>

          <C.ValueArea>
            <C.InputOfValue
              type='number'
              placeholder='digite o valor'
              value={value}
              onChange={e => setValue(e.target.value)}
            />
          </C.ValueArea>

          <C.ExpenseArea>
            <C.LabelDate>É uma despesa?</C.LabelDate>
            <C.InputOfExpense
              type='checkbox'
              onChange={handleChecked}
            />
          </C.ExpenseArea>
          <C.SubmitArea>
            <C.InputSubmit
              type='submit'
            />
          </C.SubmitArea>


        </C.ModalArea>
      </C.Modal>
    </C.Container>
  );
};