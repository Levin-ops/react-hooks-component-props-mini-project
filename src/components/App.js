import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";


function App() {

  const title = `Levin's Blog`

  return (
    <div className="App">
     <Header name={title}/>
     <About />
    </div>
  );
}

export default App;
