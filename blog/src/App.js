// /* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [articles, setarticles] = useState([
    {
      id: 0,
      title: "대전 노잼 도시",
      content: "맛집은 그래도 많이 있네요.",
      like: 10,
    },
    {
      id: 1,
      title: "대구 가지마요",
      content: "많이 보고싶을거야",
      like: 0,
    },
    {
      id: 2,
      title: "수원도 가야지",
      content: "행궁동은 이제 그만",
      like: 0,
    },
  ]);

  function likeClick(index) {
    const like = articles[index].like;
    console.log(like);
    setarticles((articles[index].like = like + 1));
  }

  const listItems = articles.map((article) => (
    <div key={article.id} className="list">
      <h4>
        {article.title} <span onClick={() => likeClick(article.id)}>❤️</span>{" "}
        {article.like}
      </h4>
      <p style={{ color: "gray", fontSize: "12px" }}>{article.content}</p>
    </div>
  ));

  return (
    <div className="App">
      <div className="black-nav">
        <img src={logo} alt="logo" style={{ width: "40px" }} />
        <h4>블로그</h4>
      </div>
      <div>{listItems}</div>
    </div>
  );
}

export default App;
