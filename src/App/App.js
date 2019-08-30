import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";
import About from "../About/About";
import New from "../New/New";
import Popular from "../Popular/Popular";
import Best from "../Best/Best";
import Movie from "../Movie/Movie";
import Search from "../Search/Search";

function App() {
  return (
    <Router>
      <div className="app">
        <Header
          image="https://www.freelogodesign.org/file/app/client/thumb/1e1ee506-82b0-4cdb-97a9-efa968581749_200x200.png?1566989729548"
          menu={[
            { link: "/popular", title: "Popular" },
            { link: "/new", title: "New" },
            { link: "/search", title: "Search" },
          ]}></Header>
        <div className="app-content">
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/new" exact component={New}></Route>
          <Route path="/popular" exact component={Popular}></Route>
          <Route path="/best" exact component={Best}></Route>
          <Route path="/movie/:id" exact component={Movie}></Route>
          <Route path="/search" exact component={Search}></Route>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
