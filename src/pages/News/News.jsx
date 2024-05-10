import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import PostService from "../../services/PostService";
import styles from "./News.module.css";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import "./News.module.css";

const TypingText = () => {
  const [text, setText] = useState("");
  const phrases = [
    "Hello, programmer!",
    "Write the code!",
    "Keep coding!",
    "Stay curious!",
    "Never stop learning!",
    "Think outside the box!",
    "Debugging is fun!",
    "Coding is an art!",
    "Embrace the bugs!",
    "Enjoy the journey!",
  ];
  const delay = 250; // Задержка между добавлением и удалением символов
  const changeDelay = 100; // Задержка между изменениями текста
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTyping) {
        if (charIndex <= phrases[phraseIndex].length) {
          setText(phrases[phraseIndex].substring(0, charIndex));
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
        } else {
          setTimeout(() => {
            setIsTyping(false);
          }, changeDelay);
        }
      } else {
        if (charIndex >= 0) {
          setText(phrases[phraseIndex].substring(0, charIndex));
          setCharIndex((prevCharIndex) => prevCharIndex - 1);
        } else {
          setTimeout(() => {
            setPhraseIndex((prevPhraseIndex) => (prevPhraseIndex + 1) % phrases.length);
            setIsTyping(true);
            setCharIndex(0);
            setText("");
          }, changeDelay);
        }
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [charIndex, isTyping, phraseIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

const News = () => {
  const { store } = useContext(Context);

  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostText, setNewPostText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await PostService.getAllPostsAsync();
      setData(response);
      setDataLoaded(true);
    };
    fetchData();
  }, []);

  const handleCreateNewPost = async () => {
    const response = await PostService.createNewPost(newPostTitle, newPostText);
    console.log(response);
    setNewPostTitle("");
    setNewPostText("");
    const AllPosts = await PostService.getAllPostsAsync();
    setDataLoaded(false);
    setData(AllPosts);
    setDataLoaded(true);
  };

  const handleDeleteButton = async (id) => {
    const response = await PostService.deletePost(id);
    const allPosts = await PostService.getAllPostsAsync();
    console.log(response);
    setDataLoaded(false);
    setData(allPosts);
    setDataLoaded(true);
  };

  const handleEditButton = async (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <>
    
      <div className={styles.content}>
        <Header />
        <TypingText />
        <div className={styles.news}>
          {store.user.role === "ADMIN" || store.user.role === "TEACHER" ? (
            <>
              <input
                className={styles.new_h}
                type="text"
                placeholder="Введите заголовок поста"
                value={newPostTitle}
                onChange={(event) => setNewPostTitle(event.target.value)}
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                className={styles.new_text}
                type="text"
                placeholder="Введите текст поста"
                value={newPostText}
                onChange={(event) => setNewPostText(event.target.value)}
              />
              <button className={styles.btn} onClick={handleCreateNewPost}>
                Создать новый пост
              </button>
            </>
          ) : (
            <></>
          )}
          {data.length === 0 ? <h1>Постов нет</h1> : <></>}
        </div>

        {
          <div className={styles.news}>
            {dataLoaded ? (
              data.map((post) => (
                <li key={post.id} className={styles.lili}>
                  <div className={styles.news}>
                    <div className={styles.card}>
                      <div className={styles.profile}>
                        <div className={styles.profile_info}>
                          <div className={styles.profile_image}>
                            <input type="file" style={{ display: "none" }} />
                            <img
                              src={`http://localhost:8080/api/v1/users/${post.userDTO.username}/getAvatar`}
                            />
                          </div>
                        </div>
                        <div className={styles.profile_details}>
                          <h2 className={styles.profile_nickname}>
                            {post.userDTO.username}
                          </h2>
                          <p className={styles.profile_date}>
                            {post.creationDate}
                          </p>
                        </div>
                      </div>
                      <div className={styles.title}>
                        <p>{post.title}</p>
                        <p>{post.text}</p>
                      </div>

                      <div className={styles.control}>
                        <button
                          className={styles.edit_button}
                          onClick={() => handleEditButton(post.id)}
                        >
                          Редактировать
                        </button>
                        <button
                          className={styles.delete_button}
                          onClick={() => handleDeleteButton(post.id)}
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p>Загрузка данных...</p>
            )}
          </div>
        }
      </div>
    </>
  );
};

export default News;
