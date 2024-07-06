import React from "react";

import * as S from "./emotion";
import { Icon } from "@/components/Svg";

interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

interface StarProps {
  fill: number;
}

const Star: React.FC<StarProps> = ({ fill }) => {
  return (
    <S.StarWrapper>
      <Icon name="Star32" size={32} fill={fill ? "accent_100" : "neutral_20"} />
    </S.StarWrapper>
  );
};

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
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
        <Star key={index} fill={getStarFill(index)} />
      ))}
    </S.RatingWrapper>
  );
};

export default StarRating;
