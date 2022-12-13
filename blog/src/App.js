// /* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [articles, setarticles] = useState([
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
    let copy_articles = [...articles];
    let article = articles[index];
    article.like = article.like + 1;
    copy_articles[index] = article;
    setarticles(copy_articles);
  }

  function button() {
    let copy_articles = [...articles];
    let article = articles[0];
    article.title = "제목 변경";
    copy_articles[0] = article;
    setarticles(copy_articles);
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
        <div style={{ display: "flex" }}>
          <img src={logo} alt="logo" style={{ width: "40px" }} />
          <h4>블로그</h4>
        </div>
      </div>
      <button onClick={button}>버튼</button>
      <div>{listItems}</div>
    </div>
  );
}

export default App;
