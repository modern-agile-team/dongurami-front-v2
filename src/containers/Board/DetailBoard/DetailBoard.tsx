import { useRouter } from "next/router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import {
  freePostCommentAPI,
  freePostsAPI,
  noticePostCommentAPI,
  noticePostsAPI,
} from "@/apis";
import { Column, Row } from "@/components/Layouts";
import { Typography } from "@/components/Utilities/Typography";
import { Converter } from "@/utils";
import { lightThemeColor } from "@/styles/theme";
import { Comment } from "@/components/UI/Board/Comment";
import type { CreateReactionDtoTypeEnum } from "@/apis/data-contracts";
import { Icon } from "@/components/Svg";
import { ModalPopup } from "@/components/Design";
import { SwitchCase } from "@/components/Utilities";
import { useUser } from "@/hooks";

import * as S from "./emotion";
import {
  Notice,
  NoticeComplete,
  CommentModal,
  DeleteModal,
} from "./private/Modal";

export default function DetailBoard() {
  const router = useRouter();

  const { user } = useUser();

  const { postId, type } = router.query;

  const [unixTimestamp, setUnixTimestamp] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");

  const { data: postData } = useQuery({
    queryKey: ["post", postId, type],

    queryFn: async () => {
      let response;
      if (type === "free") {
        response = await freePostsAPI.freePostFindOneOrNotFound(Number(postId));
        return response.data.freePost;
      } else {
        response = await noticePostsAPI.noticePostFindOneOrNotFound(
          Number(postId)
        );

        return response.data.noticePost;
      }
    },

    enabled: postId !== undefined,
  });

  const { data: commentData, refetch } = useQuery({
    queryKey: ["comment", postId],

    queryFn: async () => {
      let response;
      if (type === "free") {
        response = await freePostCommentAPI.freePostCommentFindAllAndCount({
          postId: Number(postId),
        });
        return response.data;
      } else {
        response = await noticePostCommentAPI.noticePostCommentFindAllAndCount({
          postId: Number(postId),
        });

        return response.data;
      }
    },

    enabled: postId !== undefined,
  });

  const { data: reactionData } = useQuery({
    queryKey: ["reaction", postId, type],

    queryFn: async () => {
      let response;
      if (type === "free") {
        response = await freePostsAPI.freePostFindAllAndCountReactions({
          postId: Number(postId),
        });
        return response.data;
      } else {
        response = await noticePostsAPI.noticePostFindAllAndCountReactions({
          postId: Number(postId),
          type: "like",
        });

        return response.data;
      }
    },

    enabled: postId !== undefined,
  });

  const { mutate } = useMutation({
    mutationKey: ["post", postId, type],
    mutationFn: async () => {
      let response;
      if (type === "free") {
        response = await freePostsAPI.freePostIncrementHit(Number(postId));
      } else {
        response = await noticePostsAPI.noticePostIncreaseHit(Number(postId));
      }
    },
    onSuccess() {
      // console.log(postData);
    },
    onError(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    if (postData) {
      mutate();

      const dateObject = new Date(postData.createdAt);
      setUnixTimestamp(dateObject.getTime());
    }

    document.body.scrollTo(0, 0);
  }, [postData, mutate]);

  const handleClickDelete = () => {
    freePostsAPI.freePostRemove(Number(postId)).then(() => {
      router.back();
    });
  };

  const handleClickUpdate = async () => {
    router.push({
      pathname: `/board/free/write/`,
      query: {
        Id: postId,
      },
    });
  };

  const navigateBoardListPage = () => {
    router.push("/board");
  };

  const openModal = (type: string) => {
    setModalType(type);
    setIsOpen(true);
  };

  const handleClickLike = async () => {
    const query: { type: CreateReactionDtoTypeEnum } = {
      type: "like",
    };

    if (type === "free") {
      await freePostsAPI.freePostCreateReaction(Number(postId), query);
    } else {
      await noticePostsAPI.noticePostCreateReaction(Number(postId), query);
    }

    // if (type === "free") {
    //   await freePostsAPI.freePostRemoveReaction(Number(postId), query);
    // } else {
    //   await noticePostsAPI.noticePostRemoveReaction(Number(postId), query);
    // }
  };

  const postComment = async () => {
    const query = {
      // parentId: 1,
      description: inputValue,
      isAnonymous: false,
    };
    if (type === "free") {
      await freePostCommentAPI.freePostCommentCreate(Number(postId), query);
    } else {
      await noticePostCommentAPI.noticePostCommentCreate(Number(postId), query);
    }

    refetch();
    setInputValue("");
  };

  return (
    <Column
      horizonAlign="center"
      style={{
        width: Converter.pxToRem(787),
      }}
      gap={0}
    >
      <S.WrapTitle verticalAlign="center" horizonAlign="distribute">
        <S.Title>
          <Typography typoSize="Head6" typoColor="accent_100">
            {postData?.title}
          </Typography>
        </S.Title>

        {type === "free" && (
          <S.Btn
            color="accent_100"
            style={{
              border: `1px solid ${lightThemeColor.accent_100}`,
            }}
            onClick={() => {
              openModal("notice");
            }}
          >
            <Typography typoSize="Body2" typoColor="accent_100">
              공지로 등록
            </Typography>
          </S.Btn>
        )}
      </S.WrapTitle>

      {postData && postData?.postTags.length > 1 && (
        <S.WrapTag horizonAlign="left">
          {postData?.postTags.map((el) => {
            return (
              <Typography
                typoSize="Head12"
                typoColor="neutral_30"
                style={{
                  marginRight: 5,
                }}
              >
                #{el.name}
              </Typography>
            );
          })}
        </S.WrapTag>
      )}

      <S.Line />

      <Row.ul
        horizonAlign="right"
        style={{
          width: "100%",
        }}
      >
        <Row.li
          style={{
            marginRight: 12,
          }}
        >
          <Typography typoSize="BHead14" typoColor="neutral_70">
            유저이름 필요
          </Typography>
        </Row.li>
        <Row.li>
          <Typography typoSize="BHead14" typoColor="neutral_70">
            {Converter.timestampToDate(unixTimestamp)}
          </Typography>
        </Row.li>
      </Row.ul>

      <S.WrapDesc>
        <S.Desc>
          <S.Title>
            <Typography typoSize="Head10" typoColor="neutral_80">
              {postData?.description}
            </Typography>
          </S.Title>
        </S.Desc>
      </S.WrapDesc>

      <S.WrapBar horizonAlign="distribute" gap={0}>
        <Row.li>
          <S.Btn
            style={{
              border: `1px solid ${lightThemeColor.accent_100}`,
              marginRight: 15,
            }}
            onClick={handleClickLike}
          >
            <Icon
              name="Good32"
              size={20}
              fill="accent_100"
              style={{
                marginRight: 6,
              }}
            />

            <Typography typoSize="BHead14" typoColor="accent_100">
              좋아요 {reactionData?.contents.length}개
            </Typography>
          </S.Btn>
        </Row.li>

        {user && user?.id && postData?.userId && (
          <Row.li>
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
      </S.WrapBar>

      <S.WrapCommentInput>
        <S.Input
          placeholder="게시글의 댓글을 남겨주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <S.Btn
          style={{
            border: `1px solid ${lightThemeColor.accent_100}`,
            position: "absolute",
            bottom: 14,
            right: 20,
          }}
          onClick={() => {
            openModal("comment");
          }}
        >
          <Typography typoSize="Head12" typoColor="accent_40">
            등록
          </Typography>
        </S.Btn>
      </S.WrapCommentInput>

      <Comment data={commentData} />

      <ModalPopup open={isOpen} onClose={() => setIsOpen(false)}>
        <SwitchCase
          condition={modalType}
          cases={{
            notice: <Notice openModal={openModal} />,
            noticeComplete: <NoticeComplete onClick={navigateBoardListPage} />,
            comment: (
              <CommentModal onClick={postComment} modalType={modalType} />
            ),
            commentUpdate: (
              <CommentModal onClick={postComment} modalType={modalType} />
            ),
            commentDelete: (
              <CommentModal onClick={postComment} modalType={modalType} />
            ),
            delete: (
              <DeleteModal onClick={handleClickDelete} modalType={modalType} />
            ),
            update: (
              <DeleteModal onClick={handleClickUpdate} modalType={modalType} />
            ),
          }}
        />
      </ModalPopup>
    </Column>
  );
}
