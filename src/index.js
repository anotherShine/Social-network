import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 'likes 15' },
  { id: 2, message: 'It\'s my first post', likesCount: 'likes 23' },
];
let dialogData = [
  {id: 1, name: 'Mark'},
  {id: 2, name: 'Elon'},
  {id: 3, name: 'Tim'},
  {id: 4, name: 'Steve'},
  {id: 5, name: 'Meri'},
  {id: 6, name: 'Katy'},
  {id: 7, name: 'Lui'},
];
let dialogMessage = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Where are you from?'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogData={dialogData} dialogMessage={dialogMessage} postsData={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
