/*
 * Created on Sun Feb 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";

const Loader = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  position: relative;
  background: ${({ theme }) => theme.color.primary_100}80;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.primary_100};
    animation: slide 1s infinite linear alternate;
    opacity: 0.5;
  }
  &:after {
    animation: slide2 1s infinite linear alternate;
    opacity: 1;
  }
  @keyframes slide {
    0%,
    20% {
      transform: translate(0, 0);
    }
    80%,
    100% {
      transform: translate(20px, 20px);
    }
  }
  @keyframes slide2 {
    0%,
    20% {
      transform: translate(0, 0);
    }
    80%,
    100% {
      transform: translate(-20px, -20px);
    }
  }
`;

export default Loader;
