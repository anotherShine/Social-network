import './index.css';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, updateNewPostText, subscribe } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );
}

renderEntireTree(state);
subscribe(renderEntireTree);