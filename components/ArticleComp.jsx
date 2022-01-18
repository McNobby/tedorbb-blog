import styles from "../styles/Home.module.scss"
import React from 'react';

const ArticleComp = ({info}) => {

    const {Title, Body} = info

    const bodyEl = Body.map(e => {
        return(
            <p>{e}</p>
        )
    })


  return <div className={styles.article}>
      <h1>{Title}</h1>

    {bodyEl}
  </div>;
};

export default ArticleComp;
