import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppTheme } from './theme/AppTheme';

import { JournalApp } from './JournalApp';
import { store } from './store';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <AppTheme children={<JournalApp />} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
