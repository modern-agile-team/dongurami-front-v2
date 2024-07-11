/*
 * Created on Wed Nov 22 2023
 *
 * Copyright (c) 2023 Your Company
 */
import { useCallback, useEffect, useState } from "react";

import { Column } from "@/components/Layouts";
import { Converter } from "@/utils";
import { ReviewItem } from "@/components/UI/Review";
import { clubAPI } from "@/apis";
import {
  useClubReview,
  useClubReviewTotal,
  useClubBestReview,
} from "@/hooks/clubReview";
import { SwitchCase } from "@/components/Utilities";
import { ModalPopup } from "@/components/Design";

import { Total } from "./components/Total";
import { PostModal, ReviewModal } from "./components/Modal/Modal";

export default function Review({ clubID }: { clubID: string }) {
  const { data: total } = useClubReviewTotal(clubID);
  const { data: best } = useClubBestReview(clubID);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useClubReview({ clubId: clubID });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [review, setReview] = useState<Swagger.ClubReviewDto>();

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

  const openModal = (type: string, review: Swagger.ClubReviewDto) => {
    setModalType(type);

    setIsOpen(true);

    if (review) {
      setReview(review);
    }
  };

  const handleClickDelete = () => {};

  console.log(review);

  const handleClickPost = async (input: string, rating: number) => {
    const query = {
      starRate: rating,
      description: input,
      isAnonymous: false,
    };
    if (review) {
      await clubAPI.clubPatchUpdateClubReview(clubID, review.id, query);
    } else {
      try {
        await clubAPI.clubCreateClubReview(clubID, query);
      } catch (error) {
        console.log(error);
        alert("이미 리뷰를 등록하셨습니다");
      }
    }
  };

  return (
    <Column css={{ width: "100%", height: "100vh" }} horizonAlign="center">
      <Column css={{ width: Converter.pxToRem(787), height: "100vh" }}>
        <Total
          total={total}
          totalCount={data?.pages[0]?.totalCount}
          openModal={openModal}
        />

        {best && <ReviewItem type="best" openModal={openModal} review={best} />}

        {data?.pages?.map(
          (page, pageIndex) =>
            page?.contents?.map((review) => (
              <ReviewItem
                key={review.id}
                review={review}
                openModal={openModal}
              />
            ))
        )}
      </Column>

      <ModalPopup open={isOpen} onClose={() => setIsOpen(false)}>
        <SwitchCase
          condition={modalType}
          cases={{
            post: <ReviewModal modalType={modalType} openModal={openModal} />,
            delete: (
              <ReviewModal onClick={handleClickDelete} modalType={modalType} />
            ),
            update: <ReviewModal modalType={modalType} openModal={openModal} />,
            input: (
              <PostModal
                onClick={handleClickPost}
                modalType={modalType}
                review={review}
              />
            ),
          }}
        />
      </ModalPopup>
    </Column>
  );
}
