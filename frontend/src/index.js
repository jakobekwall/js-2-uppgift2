import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { restaurantsReducer } from './Reducers/restaurantReducer';
import { createStore } from 'redux';

const store = createStore(restaurantsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <Provider store={store}>
    < App />
  </Provider>
);


