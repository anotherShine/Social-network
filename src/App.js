import "./App.css";
import React from "react";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {

  return (
    
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage} />} />
            <Route path="/news" element={<Profile profilePage={props.state.profilePage}/>} />
            <Route path="/music" element={<Profile profilePage={props.state.profilePage}/>} />
            <Route path="/settings" element={<Profile profilePage={props.state.profilePage}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
