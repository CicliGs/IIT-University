import { useEffect, useState } from "react";
import TeacherService from "../../../services/TeacherService";
import File from "../../../components/File";

const Exam = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TeacherService.getAllExamQuestions();
      console.log(response.data);
      setQuestions(response.data);
    })();
  }, []);
  
  return (
    <>
      <h1>Exam</h1>
      <File id="2" filename="file" discipline="KSIS" httpContentType="3"/>
      <File id="2" filename="file" />
    </>
  );
};

export default Exam;
