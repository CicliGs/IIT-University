import { useEffect, useState } from "react";
import TeacherService from "../../../services/TeacherService";

const Materials = () => {
  const [materials, setMaterials] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await TeacherService.getAllMaterials();
      console.log(response.data);
      setMaterials(response.data);
    })();
  }, []);

  return (
    <>
      <h1>Materials</h1>
    </>
  );
};

export default Materials;
