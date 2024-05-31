import { Link } from "react-router-dom";
import styles from "./File.module.css";

const File = ({
  id,
  filename,
  size,
  httpContentType,
  discipline,
  fileType,
  authorUsername,
}) => {
  const path = "http://localhost:8080/api/v1/fileSystem/" + id;
  return (
    <div className={styles.file}>
      <Link to={path}>{filename}</Link>
      <p>{discipline}</p>
      <p>{httpContentType}</p>
      <p>{size}</p>
      <p>{authorUsername}</p>
    </div>
  );
};

export default File;
