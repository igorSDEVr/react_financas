import { InitialStateType } from './initialStateType';

export type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};