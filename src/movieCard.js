import React from "react";
import { Col } from "react-bootstrap";
import './MovieCard.css';

const MovieCards = ({ title, year, posterUrl, onTitleClick }) => {
  function handleTitleClick() {
    onTitleClick();
  }

  return (
      <div className="movie-card">
        <div className="movie-info">
          <h4>
            <a href="#" onClick={handleTitleClick}>
              {title}
            </a>
          </h4>
          <p>Ano: {year}</p>
        </div>
        <img src={posterUrl} alt={title} className="img-fluid" />
      </div>
  );
};

export default MovieCards;

