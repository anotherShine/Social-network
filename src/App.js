import "./App.css";
import React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/news" />
            <Route path="/music" />
            <Route path="/settings" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
