import styles from "./Video.module.css"

const Video = () => {
  return (
    <>
      <h1>Video</h1>
      <video controls autoPlay name="media">
        <source
          src="http://localhost:8080/api/v1/users/getStream"
          type="video/mp4"
        />
        Your browser does not support the video tag
      </video>
    </>
  );
};

export default Video;
