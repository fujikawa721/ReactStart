import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>あああああ</p>
    </>
  );
};

/**画面に出力する構文 */
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
