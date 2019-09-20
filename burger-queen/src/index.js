import React from 'react';
import ReactDOM from 'react-dom';

import './components/styles/index.css';//importamos bootstrap
//import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';


const container = document.getElementById('app');
ReactDOM.render(<App />, container);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


