/*
 * Created on Wed Nov 22 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Column } from "@/components/Layouts";
import useClubReviewTotal from "@/hooks/clubReview/useClubReviewTotal/useClubReviewTotal";

import { Total } from "./components/Total";

export default function Review({ clubID }: { clubID: string }) {
  const total = useClubReviewTotal(clubID);

  return (
    <Column css={{ width: "100%", height: "100vh" }} horizonAlign="center">
      <Total total={total} />
    </Column>
  );
}
