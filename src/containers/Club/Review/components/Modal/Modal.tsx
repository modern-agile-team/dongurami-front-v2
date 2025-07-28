import styled from "@emotion/styled";

import { ModalPopup, StarRating } from "@/components/Design";
import { Column, Row } from "@/components/Layouts";
import { Typography } from "@/components/Utilities";
import { Icon } from "@/components/Svg";
import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";
import { useState } from "react";

interface ModalTitleProps {
  title: string[];
}

interface ComponentProps {
  openModal?: (type: string, review?: any) => void;
  onClick?: (input?: any, rating?: any) => Promise<void> | void;
  modalType?: string;
  review?: Swagger.ClubReviewDto;
}

const Input = styled.textarea`
  margin-top: 40px;
  background-color: ${lightThemeColor.white};
  font-size: 13px;
  line-height: normal;
  font-weight: 400;
  padding: 20px 10px;
  border: 1px solid ${lightThemeColor.neutral_20};
  outline: none;
  width: calc(100% - 40px);
  &::placeholder {
    font-size: 13px;
    line-height: normal;
    font-weight: 400;
    color: ${lightThemeColor.neutral_20};
  }
`;

const ModalTitle: React.FC<ModalTitleProps> = ({ title }) => {
  return (
    <>
      {title.map((item, index) => {
        return (
          <Typography
            typoSize="Head10"
            typoColor={index % 2 ? "accent_100" : "neutral_50"}
            key={index}
            style={{
              whiteSpace: "pre",
            }}
          >
            {item}
          </Typography>
        );
      })}
    </>
  );
};

export const ReviewModal: React.FC<ComponentProps> = ({
  onClick,
  modalType,
  openModal,
}) => {
  let content = "";

  if (modalType === "post") content = "등록";
  else if (modalType === "delete") content = "삭제";
  else content = "수정";

  return (
    <>
      <ModalPopup.Title>
        <Row verticalAlign="center">
          <Icon
            name={
              modalType === "post"
                ? "Chat30"
                : "update"
                  ? "Deletion32"
                  : "Warning32"
            }
            size={24}
            fill="accent_100"
            style={{
              marginRight: 5,
            }}
          />
          <ModalTitle title={["후기를 ", content, "하시겠습니까?"]} />
        </Row>

        {modalType === "post" && (
          <ModalPopup.Contents>
            <Typography
              typoSize="RHead13"
              typoColor={"neutral_50"}
              style={{
                marginTop: 6,
              }}
            >
              동아리원들에게 후기를 공유해요
            </Typography>
          </ModalPopup.Contents>
        )}
      </ModalPopup.Title>

      <ModalPopup.Bottom
        cancelText="취소"
        confirmText={content}
        onConfirm={(_, hide) => {
          hide();

          if (openModal) {
            setTimeout(() => {
              openModal("input");
            }, 200);
          }

          onClick && onClick();
        }}
      />
    </>
  );
};

export const PostModal: React.FC<ComponentProps> = ({ onClick, review }) => {
  const [input, setInput] = useState<string>(review?.description ?? "");
  const [rating, setRating] = useState<number>(review?.starRate ?? 0);
  return (
    <>
      <ModalPopup.Title>
        <Typography
          typoSize="Head10"
          typoColor={"accent_100"}
          style={{
            whiteSpace: "pre",
          }}
        >
          후기 작성
        </Typography>
        <Icon name={"Chat30"} size={24} fill="accent_100" />

        <StarRating onRatingChange={setRating} defaultRating={rating} />
      </ModalPopup.Title>
      <ModalPopup.Contents>
        <Input
          placeholder="동아리 활동에 대한 의견을 남겨주세요."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </ModalPopup.Contents>

      <ModalPopup.Bottom
        cancelText="취소"
        confirmText={"등록"}
        onConfirm={(_, hide) => {
          hide();

          onClick && onClick(input, rating);
        }}
      />
    </>
  );
};
