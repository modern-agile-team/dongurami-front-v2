/*
 * Created on Sun Mar 03 2024
 *
 * Copyright (c) 2024 Your Company
 */

const breakpoints = {
  pc: withMedia(withMinWidth("1280px")),
  tablet: withRangeMedia({ min: "768px", max: "1279px" }),
  mobile1: withRangeMedia({ min: "360px", max: "767px" }),
  mobile2: withMedia(withMaxWidth("359px")),
};

function withMinWidth(value: string) {
  return `(min-width: ${value})`;
}

function withMedia(value: string) {
  return `@media ${value}`;
}

function withMaxWidth(value: string) {
  return `(max-width: ${value})`;
}

function withRangeMedia({ min, max }: { min: string; max: string }) {
  return `${withMedia(withMinWidth(min))} and ${withMaxWidth(max)}`;
}

export default breakpoints;
