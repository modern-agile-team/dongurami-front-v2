/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React, { useEffect, useState } from "react";

import * as S from "./emotion";

import { Button, Modal } from "@/components/Design";
import { Typography } from "@/components/Utilities";
import { lightThemeColor } from "@/styles/theme";
import { Row } from "@/components/Layouts";
import { Converter } from "@/utils";
import { useRouter } from "next/router";
import { Icon } from "@/components/Svg";

interface Props {
  data: {
    type: string;
    postComment: () => void;
  };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Alert({ isOpen, setIsOpen, data }: Props) {
  const router = useRouter();

  const [textList, setTextList] = useState<string[]>(["default", "text"]);
  const [checkType, setCheckType] = useState<string>(data.type);
  const [alertContent, setAlertContent] = useState<{
    subTitle?: string;
    rightText: string;
    leftText: string;
    rightBtn: () => void;
    leftBtn: () => void;
  }>({
    subTitle: "",
    rightText: "",
    leftText: "",
    rightBtn: () => {},
    leftBtn: () => {},
  });

  useEffect(() => {
    if (data.type) {
      setCheckType(data.type);
    }
  }, [data.type]);

  useEffect(() => {
    checkAlertContent();
  }, [checkType]);

  const checkAlertContent = () => {
    switch (checkType) {
      case "notice":
        setTextList(["게시글을 ", "공지", "로 등록 하시겠습니까?"]);
        setAlertContent({
          subTitle: "동아리원들에게 이야기를 공유해요",
          rightText: "등록",
          leftText: "취소",
          rightBtn: () => {
            setCheckType("noticeComplete");
          },
          leftBtn: () => setIsOpen(false),
        });
        break;
      case "noticeComplete":
        setTextList(["공지 등록", "완료", "!"]);
        setAlertContent({
          subTitle: "동아리원들에게 이야기를 공유해요",
          rightText: "공지 보러가기",
          leftText: "홈으로 돌아가기",
          rightBtn: () => {
            setIsOpen(false);
          },
          leftBtn: () => {
            setIsOpen(false);

            router.push("/board?page=1");
          },
        });
        break;

      case "comment":
        setTextList(["댓글을 ", "등록", "하시겠습니까?"]);
        setAlertContent({
          subTitle: "동아리원들과 함께 소통해요",
          rightText: "등록",
          leftText: "취소",
          rightBtn: () => {
            setIsOpen(false);
            data.postComment();
          },
          leftBtn: () => {
            setIsOpen(false);
          },
        });
        break;
      case "commentDelete":
        setTextList(["댓글을 ", "삭제", "하시겠습니까?"]);
        setAlertContent({
          rightText: "삭제",
          leftText: "취소",
          rightBtn: () => {
            setIsOpen(false);
          },
          leftBtn: () => {
            setIsOpen(false);
          },
        });
        break;
      case "commentUpdate":
        setTextList(["댓글을 ", "수정", "하시겠습니까?"]);
        setAlertContent({
          rightText: "수정",
          leftText: "취소",
          rightBtn: () => {
            setIsOpen(false);
          },
          leftBtn: () => {
            setIsOpen(false);
          },
        });
        break;

      case "delete":
        setTextList(["게시글을 ", "삭제", "하시겠습니까?"]);
        setAlertContent({
          rightText: "삭제",
          leftText: "취소",
          rightBtn: () => {
            setIsOpen(false);
          },
          leftBtn: () => {
            setIsOpen(false);
          },
        });
        break;

      case "update":
        setTextList(["게시글을 ", "수정", "하시겠습니까?"]);
        setAlertContent({
          rightText: "수정",
          leftText: "취소",
          rightBtn: () => {
            setIsOpen(false);
          },
          leftBtn: () => {
            setIsOpen(false);
          },
        });
        break;

      default:
        return;
    }
  };

  const checkSvg = () => {
    switch (checkType) {
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
          {textList.map((item, index) => {
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
          {alertContent.subTitle}
        </Typography>

        <Row>
          <S.AlertButton
            color="white"
            style={{
              border: `1.544px solid ${lightThemeColor.neutral_20}`,

              backgroundColor: "#fff",
              marginRight: 40,
            }}
            subTitle={alertContent.subTitle}
            onClick={() => {
              alertContent.leftBtn();
            }}
          >
            <Typography typoSize="Head12" typoColor="neutral_40">
              {alertContent.leftText}
            </Typography>
          </S.AlertButton>

          <S.AlertButton
            style={{
              border: "none",
              backgroundColor: lightThemeColor.secondary_80,
            }}
            subTitle={alertContent.subTitle}
            onClick={() => {
              alertContent.rightBtn();
            }}
          >
            <Typography typoSize="Head12" typoColor="white">
              {alertContent.rightText}
            </Typography>
          </S.AlertButton>
        </Row>
      </S.WrapAlert>
    </Modal>
  );
}
