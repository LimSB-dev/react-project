// /* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [articles, setarticles] = useState([
    {
      title: "대전 노잼 도시",
      content: "맛집은 그래도 많이 있네요.",
      like: 10,
    },
    {
      title: "대구 가지마요",
      content: "많이 보고싶을거야",
      like: 0,
    },
    {
      title: "수원도 가야지",
      content: "행궁동은 이제 그만",
      like: 0,
    },
  ]);

  function likeClick(index) {
    let copyArticles = [...articles];
    let article = articles[index];
    article.like = article.like + 1;
    copyArticles[index] = article;
    setarticles(copyArticles);
  }

  function editButton() {
    let copyArticles = [...articles];
    let article = articles[0];
    article.title = "제목 변경";
    copyArticles[0] = article;
    setarticles(copyArticles);
  }

  function orderButton() {
    let copyArticles = [...articles];
    copyArticles.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      console.log(titleA, titleB);
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
    setarticles(copyArticles);
  }

  const listItems = articles.map((article) => (
    <div key={article.id} className="list">
      <h4>
        {article.title}{" "}
        <button onClick={() => likeClick(articles.indexOf(article))}>❤️</button>{" "}
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
      <button onClick={editButton}>수정</button>
      <button onClick={orderButton}>순서</button>
      <div>{listItems}</div>
    </div>
  );
}

export default App;
