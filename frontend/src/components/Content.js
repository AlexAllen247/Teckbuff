import React from "react";
import { useState, useEffect } from "react";
import contentService from "../services/contents";
import ContentCard from "./ContentCard";

const Contents = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    contentService.getAll().then((data) => {
      setContent(data);
    });
  }, []);

  return (
    <section className="contents">
      {content.map((element) => (
        <ContentCard key={element._id} post={element} />
      ))}
    </section>
  );
};

export default Contents;
