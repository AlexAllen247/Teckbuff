import React from "react";
import { useState, useEffect } from "react";
import videoService from "../services/videos";

const Videos = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    videoService.getAll().then((data) => {
      setVideo(data);
    });
  }, []);

  return (
    <section className="videos">
      {video.map((element) => (
        <div>{element.url}</div>
      ))}
    </section>
  );
};

export default Videos;
