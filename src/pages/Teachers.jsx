import { useEffect } from "react";
import axios from "axios";
import TeacherService from "../services/TeacherService";

const Teachers = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await TeacherService.get()
      console.log(response)
    }
    fetchData()

  }, [])
    return (
      <>
        <h1>Teachers</h1>
      </>
    );
  };
  
  export default Teachers;