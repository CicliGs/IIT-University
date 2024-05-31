import { useEffect, useState } from "react";
import TeacherService from "../../../services/TeacherService";
import File from "../../../components/File";
import "./Labs.css";

const Labs = () => {
  const [labs, setLabs] = useState([]);
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TeacherService.getAllLabs();
      console.log(response.data);
      setLabs(response.data);

      const response2 = await TeacherService.getDisciplines();
      console.log(response2.data);
      setDisciplines(response2.data);
    })();
  }, []);

  return (
    <>
      <h1>LABS</h1>
      <div className="disciplines">
        {disciplines.map((discipline) => (
          <p>{discipline}</p>
        ))}
      </div>
      {labs.map((lab) => (
        <File
          key={lab.id}
          id={lab.id}
          size={lab.size}
          httpContentType={lab.httpContentType}
          authorUsername={lab.userDTO.username}
          filename={lab.name}
          discipline={lab.discipline}
        />
      ))}
    </>
  );
};

export default Labs;
