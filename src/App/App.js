import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieBase from "../MovieBase";
import "./App.css";
import { API_Key } from "../ConstantsJS";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";
import About from "../About/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Header
          logo="https://sc.dish.com/shared/images/station-logos/hlmrk.png"
          menu={["New", "Popular", "Search"]}></Header>
        <div className="app-content">
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
