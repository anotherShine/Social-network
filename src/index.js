import './index.css';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>
    </React.StrictMode>
  );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);