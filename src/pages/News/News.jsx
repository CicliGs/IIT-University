import React from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import Post from "../../components/Post";

export default function News() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/post")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении постов");
      });
  }, []);

  return (
    <>
      <Header />
      <h1>News page</h1>
      {data.length === 0 ? console.log("data is null") : console.log(data)}
      <ul>
        {data.length === 0
          ? console.log("data is null")
          : data.map((element) => (
              <li key={element.id}>
                <h3>{element.title}</h3>
                <p>{element.text}</p>
                <p>{element.creationDate}</p>
              </li>
            ))}
      </ul>
    </>
  );
}
