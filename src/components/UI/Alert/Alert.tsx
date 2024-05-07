/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React from "react";

import * as S from "./emotion";

import { Button, Modal } from "@/components/Design";
import { Typography } from "@/components/Utilities";
import { lightThemeColor } from "@/styles/theme";
import { Row } from "@/components/Layouts";
import { Icon } from "@/components/Svg";

interface Props {
  data: {
    type: string;
    textList: string[]; // textList의 타입을 string 배열로 수정
    alertContent: {
      subTitle?: string;
      rightText: string;
      leftText: string;
      rightBtn: () => void;
      leftBtn: () => void;
    };
  };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Alert({ isOpen, setIsOpen, data }: Props) {
  const checkSvg = () => {
    switch (data.type) {
      case "notice":
        return (
          <Icon
            name="Notice32"
            size={24}
            fill="accent_100"
            style={{
              marginRight: 6,
            }}
          />
        );
      case "comment":
        return (
          <Icon
            name="Chat30"
            size={24}
            color="accent_100"
            fill="accent_100"
            style={{
              marginRight: 6,
            }}
          />
        );
      case "update" || "commentUpdate":
        return (
          <Icon
            name="Warning32"
            size={24}
            fill="accent_100"
            style={{
              marginRight: 6,
            }}
          />
        );
      case "delete" || "commentDelete":
        return (
          <Icon
            name="Deletion32"
            size={24}
            fill="accent_100"
            style={{
              marginRight: 6,
            }}
          />
        );
      default:
        return;
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.WrapAlert verticalAlign="center" horizonAlign="center">
        <Row verticalAlign="center">
          {checkSvg()}
          {data.textList.map((item, index) => {
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
        </Row>

        <Typography
          typoSize="RHead13"
          typoColor={"neutral_50"}
          style={{
            marginTop: 6,
          }}
        >
          {data.alertContent?.subTitle}
        </Typography>

        <Row>
          <S.AlertButton
            color="white"
            style={{
              border: `1.544px solid ${lightThemeColor.neutral_20}`,

              backgroundColor: "#fff",
              marginRight: 40,
            }}
            subTitle={data.alertContent.subTitle}
            onClick={() => {
              data.alertContent.leftBtn();
            }}
          >
            <Typography typoSize="Head12" typoColor="neutral_40">
              {data.alertContent.leftText}
            </Typography>
          </S.AlertButton>

          <S.AlertButton
            style={{
              border: "none",
              backgroundColor: lightThemeColor.secondary_80,
            }}
            subTitle={data.alertContent.subTitle}
            onClick={() => {
              data.alertContent.rightBtn();
            }}
          >
            <Typography typoSize="Head12" typoColor="white">
              {data.alertContent.rightText}
            </Typography>
          </S.AlertButton>
        </Row>
      </S.WrapAlert>
    </Modal>
  );
}
