import React from "react";
/*import Article from './Article'*/
import ArticleList from "./ArticleList";
import articles from "../fixtures";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

/*function App() {
    return (
        <div>
            <h1>Мумия возрождается</h1>
            <Article article={articles[0]} foo="bar" flag />
        </div>
    )
}*/
function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3 title">
          Interesting facts from the life of the inhabitants of the earth
        </h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
