import "./App.css";
import React from "react";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { render } from './../../../../13.1_Type_Script/tutorial-rok-do-kroku/dist/helpers/render-tasks.helper';

function App(props) {

  return (
    
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile postsData={props.postsData} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogData={props.dialogData} dialogMessage={props.dialogMessage}/>} />
            <Route path="/news" element={<Profile postsData={props.postsData}/>} />
            <Route path="/music" element={<Profile postsData={props.postsData}/>} />
            <Route path="/settings" element={<Profile postsData={props.postsData}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
