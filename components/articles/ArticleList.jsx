import React from "react";

const ArticleList = ({ articles = [] }) => {
  return (
    <div>
      {articles.map((e) => {
        return (
          <div key={e.id}>
            <h1>{e.title}</h1>
            {/* Create a get image url function plz */}
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
