/*
 * Created on Wed Nov 22 2023
 *
 * Copyright (c) 2023 Your Company
 */
import { useCallback, useEffect, useState } from "react";

import { Column } from "@/components/Layouts";
import { Converter } from "@/utils";
import { ReviewItem } from "@/components/UI/Review";

import { Total } from "./components/Total";
import { useClubReview, useClubReviewTotal } from "@/hooks/clubReview";

export default function Review({ clubID }: { clubID: string }) {
  const total = useClubReviewTotal(clubID);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useClubReview({ clubId: clubID });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 500 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <Column css={{ width: "100%", height: "100vh" }} horizonAlign="center">
      <Column css={{ width: Converter.pxToRem(787), height: "100vh" }}>
        <Total total={total} totalCount={data?.pages[0]?.totalCount} />
        <ReviewItem type="best" />

        {data?.pages?.map(
          (page, pageIndex) =>
            page?.contents?.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))
        )}
      </Column>
    </Column>
  );
}
