/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React from "react";

import * as S from "./emotion";
import { lightThemeColor } from "@/styles/theme";
import { Converter } from "@/utils";
import { Typography } from "@/components/Utilities";
import { Button } from "@/components/Design";
import Image from "next/image";
import Profile from "@/assets/main/profile.png";
import { Icon } from "@/components/Svg";

interface CommentData {
  data:
    | Swagger.Api.FreePostCommentFindAllAndCount.ResponseBody
    | Swagger.Api.NoticePostCommentFindAllAndCount.ResponseBody;
  // type: string;
  // handleClickPostDetail: ({ id, type }: PostData) => void;
}

export default function Comment({ data }: CommentData) {
  return (
    <>
      {data.contents.map((content) => {
        return (
          <>
            <S.WrapComment>
              <Image width={33} height={33} src={Profile} alt="프로필" />

              <S.WrapContent>
                <Typography typoSize="Head7" typoColor="secondary_100">
                  유저이름 폰트수정
                </Typography>
                <Typography typoSize="Head7" typoColor="primary_60">
                  {Converter.timeToCustomFormat(content.createdAt)} 폰트수정
                </Typography>
                <Typography typoSize="Head7" typoColor="neutral_100">
                  {content.description} 폰트수정
                </Typography>
              </S.WrapContent>
            </S.WrapComment>

            {content.children.map((replies) => {
              return (
                <S.WrapReplies verticalAlign="center">
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
                      <Typography typoSize="Head7" typoColor="secondary_100">
                        유저이름 폰트수정
                      </Typography>
                      <Typography typoSize="Head7" typoColor="primary_60">
                        {Converter.timeToCustomFormat(replies.createdAt)}{" "}
                        폰트수정
                      </Typography>
                      <Typography typoSize="Head7" typoColor="neutral_100">
                        {replies.description} 폰트수정
                      </Typography>
                    </S.WrapContent>
                  </S.WrapComment>
                </S.WrapReplies>
              );
            })}
          </>
        );
      })}
    </>
  );
}
