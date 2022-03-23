import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const name = 'ChikChikcly Space Hands ForsmaZhorovich';
const element = <h1>Hi, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('newElm')
);
