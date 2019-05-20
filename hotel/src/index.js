import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducers from './redux/reducers';


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const firebase = require('firebase/app');

var firebaseConfig = {
    apiKey: "AIzaSyBqxNB5Pg1yebKy_YkO1IXdklYF5S-jAUQ",
    authDomain: "hotel-skylab.firebaseapp.com",
    databaseURL: "https://hotel-skylab.firebaseio.com",
    projectId: "hotel-skylab",
    storageBucket: "hotel-skylab.appspot.com",
    messagingSenderId: "342640376177",
    appId: "1:342640376177:web:1c9485c9fe0f300b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>  
    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
