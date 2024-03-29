import React from "react";
import { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import Post from "../../components/Post";
import PostService from "../../services/PostService";
import styles from "./News.module.css";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function News() {
  const [data, setData] = React.useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { store } = useContext(Context);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await PostService.getAllPostsAsync();
      setData(response);
      setDataLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {store.user.role === "ADMIN" || store.user.role === "TEACHER" ? (
        <Button>Новый пост</Button>
      ) : (
        <></>
      )}


      <h1>News page</h1>
      {dataLoaded ? (
        data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <p>Дата создания: {post.creationDate}</p>
          </div>
        ))
      ) : (
        <p>Загрузка данных...</p>
      )}
    </>
  );
}
