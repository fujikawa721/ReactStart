import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App2 } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


/**画面に出力する構文 */
root.render(
  <StrictMode>
    <App2 />
  </StrictMode>
);
