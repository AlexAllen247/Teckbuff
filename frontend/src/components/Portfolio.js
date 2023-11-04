import React, { useState, useEffect } from "react";
import portfolioItemService from "../services/portfolioItems";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const portfolioItems = await portfolioItemService.getAll();
        setPortfolioItems(portfolioItems);
      } catch (error) {
        console.error("Failed to fetch portfolio items:", error);
      }
    };
    fetchPortfolioItems();
  }, []);

  const styles = {
    portfolioItems: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
  };

  return (
    <section className="portfolio" style={styles.portfolioItems}>
      {portfolioItems.map((portfolioItem) => (
        <PortfolioCard key={portfolioItem.id} portfolioItem={portfolioItem} />
      ))}
    </section>
  );
};

export default Portfolio;
