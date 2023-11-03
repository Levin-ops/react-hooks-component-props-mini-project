import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  const articles = [
    {
      title: "Sample Article 1",
      date: "",
      preview: "This is the first article preview.",
    },
    {
      title: "Sample Article 2",
      date: "April 2, 2023",
      preview: "This is the second article preview.",
    },
  ];

  return (
    <div className ="App">
      <Header blogName="Levin's Blog" />
      <About
        imageSrc="https://via.placeholder.com/215"
        aboutText="About your blog goes here."
      />
      <ArticleList articles={articles} />
    
    </div>
  );
}

export default App;
