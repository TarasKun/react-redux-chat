import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux";
import {Provider} from "react-redux"
import {reducer} from "./store/reducer";
import AppLayout from "./components/AppLayout/AppLayout";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppLayout/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
