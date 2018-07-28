import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redicers/reducer'

const store = createStore(reducer);

const Index = () => {
  return (
    <Provider store={}>
      <div>Hello, guys!</div>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
