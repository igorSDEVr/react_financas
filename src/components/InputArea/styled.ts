import styled from "styled-components";

export const Container = styled.div`
  margin: 30px;
`;

export const Button = styled.button`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  background-color: #00008b;
  border: none;
  height: 50px;
  padding: 0 40px;
  border-radius: 30px;;
`;

export const Modal = styled.div<{show: boolean}>`
  display: ${props=>props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #232323AA;
`;

export const ModalArea = styled.form`
  height: 60vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  background-color: #00BBFF;
  border-radius: 50px;
`;

export const TextArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

export const DateArea = styled.div`
  flex: 1;
`;

export const ValueArea = styled.div`
  flex: 1;
`;

export const ExpenseArea = styled.div`
  flex: 1;
`;

export const SubmitArea = styled.div`
  flex: 1;
`;

export const InputOfDate = styled.input`
  display: block;
  margin: auto;
  margin-top: 10px;
  height: 35px;
  width: 80%;
  border-radius: 10px;
  border: none;
`;

export const InputOfText = styled.input`
  display: block;
  width: 80%;
  height: 35px;
  border: none;
  border-radius: 8px;
`;

export const InputOfExpense = styled.input`
  display: block;
  margin: auto;
  margin-top: 30px;
  height: 25px;
  width: 25px;
`;

export const InputOfValue = styled.input`
  display: block;
  margin: auto;
  margin-top: 40px;
  height: 35px;
  width: 80%;
  border-radius: 10px;
  border: none;
`;

export const InputSubmit = styled.input`
  margin: auto;
  display: block;
  height: 35px;
  width: 80%;
  border-radius: 10px;
  border: none;
  background-color: #00008b;
  color: #fff;
`;

export const LabelDate = styled.label`
  color: #fff;
  display: block;
  text-align: center;
  margin-top: 40px;
`;