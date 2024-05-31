import { useEffect, useState } from "react";
import api from "../http";
import styles from "./Profile.module.css";
import Header from "../components/Header/Header";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const response = await api.get(
        "http://localhost:8080/api/v1/users/get-current-user"
      );
      console.log(response.data);
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.contain}>
          <div className={styles.card}>
            <div className={styles.profile}>
              {/*Картинка профиля*/}
              <div className={styles.profile_info}>
                <div className={styles.profile_image}>
                  <input type="file" style={{ display: "none" }} />
                  <img
                    src={`http://localhost:8080/api/v1/users/${localStorage.getItem(
                      "username"
                    )}/getAvatar`}
                  />
                </div>
              </div>
              {/*Текст возле профиля*/}
              <div className={styles.profile_details}>
                <div className={styles.text}>
                  <h2 className={styles.profile_nickname}>
                    {user.username}
                    <span>{user.role}</span>
                  </h2>
                  <div className={styles.about}>
                    <h3>О себе:</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Culpa, expedita?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.control}>
              <button
                className={styles.edit_button}
                onClick={() => handleEditButton(post.id)}
              >
                Редактировать профиль
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
