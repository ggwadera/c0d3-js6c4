import React from 'react';

import Star from '../components/Star'

import '../styles/stars.css'

const ratings = [1, 2, 3, 4, 5];

const Stars = () => {
  const [rating, setRating] = React.useState(0);
  const [isClicked, setClicked] = React.useState(false);

  const handleClick = (i) => {
    setClicked(true);
    setRating(i);
  };

  const handleMouseEnter = (i) => {
    if (!isClicked) setRating(i);
  };

  const handleDivEnter = () => {
    setClicked(false);
  };

  return (
    <main>
      <div className="stars-container" onMouseEnter={handleDivEnter}>
        {ratings.map((i) => (
          <Star
            key={i}
            selected={rating >= i}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
          />
        ))}
      </div>
      <p>{isClicked ? `You have given ${rating} Stars!` : `You are giving ${rating} Stars!`}</p>
    </main>
  );
};

export default Stars;