import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArticleList from "../components/articles/ArticleList";
import getImageUrl from "../lib/GetImageUrl";
import pocketbase from "../lib/PocketBase";
import styles from "../styles/category.module.scss";

// export const getServerSideProps = async (context) => {
//   const categoryData = await pocketbase.records.getOne(
//     "categories",
//     context.query.category
//   );

//   const resultList = await pocketbase.records.getList("posts", 1, 50, {
//     filter: `category.id = "${categoryData.id}" && published = true`,
//   });

//   return {
//     props: {
//       categoryData: JSON.stringify(categoryData),
//       articleList: JSON.stringify(resultList.items),
//     },
//   };
// };

// getServersideProps was called when browser queried for sw.js which caused errors

const Category = () => {
  // categoryData = JSON.parse(categoryData);
  // articleList = JSON.parse(articleList);

  useEffect(() => {
    getData();
  }, []);

  const [categoryData, setCategoryData] = useState({});
  const [articleList, setArticleList] = useState([]);

  const router = useRouter();

  const getData = async () => {
    const categoryData = await pocketbase.records.getOne(
      "categories",
      router.asPath.split("/")[1]
    );

    setCategoryData(categoryData);

    const resultList = await pocketbase.records.getList("posts", 1, 50, {
      filter: `category.id = "${categoryData.id}" && published = true`,
    });

    setArticleList(resultList.items);
  };

  const imgUrl = getImageUrl(categoryData.id, categoryData.header_image);

  const myLoader = ({ src, width, quality }) => {
    return imgUrl;
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1>{categoryData.display_name}</h1>
        </div>
        <Image
          className={styles.headerImage}
          loader={myLoader}
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={styles.container}>
        <ArticleList articles={articleList} />
      </div>
    </>
  );
};

export default Category;
