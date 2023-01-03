import * as C from './AppStyles';
import { Header } from './components/Header';
import { InfoArea } from './components/InfoArea';
import { TableArea } from './components/TableArea';
import { InputArea } from './components/InputArea';

export const App = () => {

  return (
    <>
      <Header />
      <C.Body>
        <InfoArea />
        <InputArea />
        <TableArea />
      </C.Body>
    </>
  );
};