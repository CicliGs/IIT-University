import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../../services/PostService";
import styles from "./EditPost.module.css";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostText, setNewPostText] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const response = await PostService.getPostById(id);
      setNewPostTitle(response.title);
      setNewPostText(response.text);
    };
    getPost();
  }, []);

  const handleSaveNewPost = () => {
    const response = PostService.editPost(id, newPostTitle, newPostText);
    
    setTimeout(() => {
      console.log(response)
      navigate("/news")
    }, 1000)
  };

  return (
    <>
      <h3>
        Редактирование поста <span>{id}</span>
      </h3>
      <div className={styles.edit}>
        <input
          className={styles.theme}
          type="text"
          placeholder="Введите заголовок поста"
          value={newPostTitle}
          onChange={(event) => setNewPostTitle(event.target.value)}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className={styles.post}
          type="text"
          placeholder="Введите текст поста"
          value={newPostText}
          onChange={(event) => setNewPostText(event.target.value)}
        />
        <button className={styles.edit_button} onClick={handleSaveNewPost}>
          Сохранить
        </button>
      </div>
    </>
  );
};

export default EditPost;
