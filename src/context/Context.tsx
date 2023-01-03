import { createContext, useReducer } from 'react';
import { listInitialState, listReducer } from './reducers/listReducer';
import { ReducerActionType } from '../types/reducerActionType';
import { InitialStateType } from '../types/initialStateType';
import { ContextType } from '../types/ContextType';
import { ChildrenType } from '../types/ChildrenType';

const initialState: InitialStateType = {
  list: listInitialState 
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (state: InitialStateType, action: ReducerActionType): any => ({
  list: listReducer(state.list, action)
});

export const ContextProvider = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};