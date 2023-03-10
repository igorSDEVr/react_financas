import ReactDOM from 'react-dom/client';
import { ContextProvider } from './context/Context';
import { App } from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);