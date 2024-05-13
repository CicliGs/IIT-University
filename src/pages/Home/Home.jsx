import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";
import Header from "../../components/Header/Header";
import ParticlesBg from "../../components/ParticlesBg";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    /*if (localStorage.getItem("access_token")) {
      store.checkAuth();
    }*/
  }, []);

  if (store.isLoading) {
    console.log("is loading", store.isLoading);
    return <h1>Загрузка ...</h1>;
  }

  return (
    <>
      <Header />
      <ParticlesBg />
      <div className="content">
        <div className="content-text">
          <h1>
            К<span>афедра</span>
          </h1>
          <h1>
            И<span>нтеллектуальных</span>
          </h1>
          <h1>
            И<span>нформационных</span>
          </h1>
          <h1>
            Т<span>ехнологий</span>
          </h1>
        </div>
      </div>
      <div className="show-content">
        <div className="cont">
          <div className="department-info">
            <div className="image-depart">
              <img src="/comp&books.png" alt="" />
            </div>
            <div className="text-depart">
              <h3>Кафедра интеллектуальных информационных технологий</h3>
              <p>
                Кафедра интеллектуальных информационных технологий (КИИТ) — это
                ведущее подразделение нашего университета,<br></br>{" "}
                специализирующееся на передовых исследованиях и образовательных
                программах в области информационных технологий.
              </p>
            </div>
          </div>
          <div className="research-areas">
            <div className="text-res">
              <div className="res-list">
                <h3>Направления исследований</h3>
                <ul>
                  <li>Искусственный интеллект</li>
                  <li>Программное обеспечение</li>
                  <li>Вычислительные машины</li>
                  <li>Автоматизированные системы</li>
                  <li>Мобильные системы</li>
                  <li>Промышленная электроника</li>
                </ul>
              </div>
            </div>
            <div className="image-research">
              <img src="/language.png" alt="" />
            </div>
          </div>
          <div className="achievements">
            <div className="image-achievements">
              <img src="/code.png" alt="" />
            </div>
            <div className="text-achievements">
              <h3>Достижения кафедры</h3>
              <p>
                Кафедра интеллектуальных информационных технологий активно
                участвует в международных научных конференциях,<br></br>{" "}
                разработке инновационных проектов и публикации статей в ведущих
                журналах.
              </p>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default observer(Home);
