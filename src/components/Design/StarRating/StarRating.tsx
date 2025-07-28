import React, { useState } from "react";

import * as S from "./emotion";
import { Icon } from "@/components/Svg";

interface StarRatingProps {
  initialRating?: number;
  totalStars?: number;
  defaultRating?: number;
  onRatingChange?: (rating: number) => void;
}

interface StarProps {
  fill: number;
  onClick?: () => void;
}

const Star: React.FC<StarProps> = ({ fill, onClick }) => {
  return (
    <S.StarWrapper onClick={onClick}>
      <Icon name="Star32" size={32} fill={fill ? "accent_100" : "neutral_20"} />
    </S.StarWrapper>
  );
};

const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  totalStars = 5,
  defaultRating,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(
    defaultRating ? defaultRating : initialRating
  );

  const handleStarClick = (index: number) => {
    setRating(index + 1);
    onRatingChange && onRatingChange(index + 1);
  };

  const getStarFill = (index: number): number => {
    const starValue = index + 1;
    if (starValue <= rating) {
      return 100;
    } else if (starValue > rating && starValue - 1 < rating) {
      return (rating - Math.floor(rating)) * 100;
    } else {
      return 0;
    }
  };

  return (
    <S.RatingWrapper>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          fill={getStarFill(index)}
          onClick={() => {
            onRatingChange && handleStarClick(index);
          }}
        />
      ))}
    </S.RatingWrapper>
  );
};

export default StarRating;
