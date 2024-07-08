/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React from "react";
import Image from "next/image";

import Profile from "@/assets/main/profile.png";
import { Icon } from "@/components/Svg";
import { Row } from "@/components/Layouts";
import { lightThemeColor } from "@/styles/theme";
import { useUser } from "@/hooks";
import { Converter } from "@/utils";
import { Typography } from "@/components/Utilities";

import * as S from "./emotion";

interface CommentData {
  data?:
    | Swagger.Api.FreePostCommentFindAllAndCount.ResponseBody
    | Swagger.Api.NoticePostCommentFindAllAndCount.ResponseBody;
  openModal: (type: string) => void;
}

export default function Comment({ data, openModal }: CommentData) {
  const { user } = useUser();
  return (
    <>
      {data?.contents.map((content) => {
        return (
          <Row key={content.id} style={{ width: "100%" }}>
            <S.WrapComment>
              <Image width={33} height={33} src={Profile} alt="프로필" />

              <S.WrapContent>
                <Typography typoSize="Head10" typoColor="secondary_100">
                  {content.user.nickname}
                </Typography>
                <Typography typoSize="RHead13" typoColor="primary_60">
                  {Converter.timeToCustomFormat(content.createdAt)}
                </Typography>
                <Typography typoSize="Head10" typoColor="neutral_100">
                  {content.description}
                </Typography>
              </S.WrapContent>
              {user && user?.id && content?.userId && (
                <Row.li
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 12,
                  }}
                >
                  <S.Btn
                    style={{
                      border: `1px solid ${lightThemeColor.neutral_20}`,
                      marginRight: 9,
                    }}
                    onClick={() => openModal("update")}
                  >
                    <Typography typoSize="Head12" typoColor="neutral_30">
                      수정
                    </Typography>
                  </S.Btn>
                  <S.Btn
                    style={{
                      border: `1px solid ${lightThemeColor.neutral_20}`,
                    }}
                    onClick={() => openModal("delete")}
                  >
                    <Typography typoSize="Head12" typoColor="neutral_30">
                      삭제
                    </Typography>
                  </S.Btn>
                </Row.li>
              )}
            </S.WrapComment>

            {content.children.map((replies) => {
              return (
                <S.WrapReplies verticalAlign="center" key={replies.id}>
                  <Icon
                    name="ReRight48"
                    size={32}
                    fill={"secondary_20"}
                    style={{
                      marginRight: 22,
                    }}
                  />

                  <S.WrapComment>
                    <Image width={33} height={33} src={Profile} alt="프로필" />
                    <S.WrapContent>
                      <Typography typoSize="Head10" typoColor="secondary_100">
                        {replies.user.nickname}
                      </Typography>
                      <Typography typoSize="RHead13" typoColor="primary_60">
                        {Converter.timeToCustomFormat(replies.createdAt)}
                      </Typography>
                      <Typography typoSize="Head10" typoColor="neutral_100">
                        {replies.description}
                      </Typography>
                    </S.WrapContent>
                  </S.WrapComment>

                  {user && user?.id && replies?.userId && (
                    <Row.li
                      style={{
                        position: "absolute",
                        bottom: 12,
                        right: 12,
                      }}
                    >
                      <S.Btn
                        style={{
                          border: `1px solid ${lightThemeColor.neutral_20}`,
                          marginRight: 9,
                        }}
                        onClick={() => openModal("update")}
                      >
                        <Typography typoSize="Head12" typoColor="neutral_30">
                          수정
                        </Typography>
                      </S.Btn>
                      <S.Btn
                        style={{
                          border: `1px solid ${lightThemeColor.neutral_20}`,
                        }}
                        onClick={() => openModal("delete")}
                      >
                        <Typography typoSize="Head12" typoColor="neutral_30">
                          삭제
                        </Typography>
                      </S.Btn>
                    </Row.li>
                  )}
                </S.WrapReplies>
              );
            })}
          </Row>
        );
      })}
    </>
  );
}
