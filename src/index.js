import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreContext from "./StoreContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());
store.subscribe( () => {
  let state = store.getState();
  renderEntireTree(state);
});
