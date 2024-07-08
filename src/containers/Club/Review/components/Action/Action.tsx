import React from "react";

import { lightThemeColor } from "@/styles/theme";
import { Icon } from "@/components/Svg";
import { Row } from "@/components/Layouts";
import { Typography } from "@/components/Utilities";
import { useUser } from "@/hooks";

import * as S from "./emotion";

const Action = ({ review }: { review?: Swagger.ClubReviewDto }) => {
  const { user } = useUser();

  return (
    <S.Container horizonAlign="distribute" verticalAlign="top">
      <Row.li>
        <S.Btn
          style={{
            border: "none",
            padding: 8,
          }}
          // onClick={handleClickLike}
        >
          <Icon
            name="Good32"
            size={16}
            fill="accent_100"
            style={{
              marginRight: 6,
            }}
          />

          <Typography typoSize="Head12" typoColor="accent_100">
            좋아요
          </Typography>
        </S.Btn>
      </Row.li>
      {review?.userId && user?.id && (
        <Row.li>
          <S.Btn
            style={{
              border: `1px solid ${lightThemeColor.neutral_20}`,
              marginRight: 9,
            }}
            // onClick={() => openModal("update")}
          >
            <Typography typoSize="Head12" typoColor="neutral_30">
              수정
            </Typography>
          </S.Btn>
          <S.Btn
            style={{
              border: `1px solid ${lightThemeColor.neutral_20}`,
            }}
            // onClick={() => openModal("delete")}
          >
            <Typography typoSize="Head12" typoColor="neutral_30">
              삭제
            </Typography>
          </S.Btn>
        </Row.li>
      )}
    </S.Container>
  );
};

export default Action;
