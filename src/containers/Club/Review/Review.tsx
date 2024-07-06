/*
 * Created on Wed Nov 22 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { Column } from "@/components/Layouts";
import useClubReviewTotal from "@/hooks/clubReview/useClubReviewTotal/useClubReviewTotal";

import { Total } from "./components/Total";
import { Best } from "./components/Best";
import { Converter } from "@/utils";

export default function Review({ clubID }: { clubID: string }) {
  const total = useClubReviewTotal(clubID);

  return (
    <Column css={{ width: "100%", height: "100vh" }} horizonAlign="center">
      <Column css={{ width: Converter.pxToRem(787), height: "100vh" }}>
        <Total total={total} />
        <Best />
      </Column>
    </Column>
  );
}
