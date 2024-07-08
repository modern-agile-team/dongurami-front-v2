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
import { SwitchCase } from "@/components/Utilities";
import { ModalPopup } from "@/components/Design";

import { PostModal, ReviewModal } from "./components/Modal/Modal";

export default function Review({ clubID }: { clubID: string }) {
  const total = useClubReviewTotal(clubID);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useClubReview({ clubId: clubID });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");

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

  const openModal = (type: string) => {
    setModalType(type);
    setIsOpen(true);
  };

  const handleClickDelete = () => {};

  const handleClickUpdate = async () => {};

  const handleClickPost = async (input: string) => {
    console.log(input);
  };

  return (
    <Column css={{ width: "100%", height: "100vh" }} horizonAlign="center">
      <Column css={{ width: Converter.pxToRem(787), height: "100vh" }}>
        <Total
          total={total}
          totalCount={data?.pages[0]?.totalCount}
          openModal={openModal}
        />
        <ReviewItem type="best" openModal={openModal} />

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
            update: (
              <ReviewModal onClick={handleClickUpdate} modalType={modalType} />
            ),
            input: (
              <PostModal onClick={handleClickPost} modalType={modalType} />
            ),
          }}
        />
      </ModalPopup>
    </Column>
  );
}
