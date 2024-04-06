import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import ThemeProvider from './theme/ThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
    ,
  </React.StrictMode>
);
