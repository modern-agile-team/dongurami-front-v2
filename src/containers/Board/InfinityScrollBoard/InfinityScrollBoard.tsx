/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { useEffect } from "react";
import * as S from "./emotion";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function InfinityScrollBoard() {
  const testImg =
    "https://www.notion.so/image/https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff0134cd1-9872-438c-9e0c-8d1e0fc490e5%2F%25EB%25A1%259C%25EA%25B3%25A0-09.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DAKIAT73L2G45EIPT3X45%252F20220117%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20220117T051734Z%26X-Amz-Expires%3D86400%26X-Amz-Signature%3Deaa369b00358db493c420bbc8e8ad31e199d32a2421e708ecf25d2c43e95eb4b%26X-Amz-SignedHeaders%3Dhost%26response-content-disposition%3Dfilename%2520%253D%2522%2525EB%2525A1%25259C%2525EA%2525B3%2525A0-09.png%2522%26x-id%3DGetObject?table=block&id=25f5a56c-cbe9-4545-be0a-4608ca55f026&spaceId=0b241d7f-6520-4240-ac94-27957e3f3aa5&width=250&userId=735d7dbd-627b-4d04-8cd4-2a6e4a27c3a7&cache=v2";
  async function fetchPosts<T>({ queryKey }: any): Promise<T> {
    const page = queryKey[1];
    const pageSize = queryKey[2];
    return await axios.get(
      `http://54.180.108.84:3000/api/v1/posts?page=${page}&pageSize=${pageSize}`,
      {
        headers: { "Content-Type": "Application/json" },
      }
    );
  }

  const result = useInfiniteQuery({
    queryKey: ["posts", 1, 21],
    queryFn: fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (pageNumber: number): number => {
      return pageNumber + 1;
    },
  });

  return (
    <S.Wrap>
      <S.BoardGrid column={3} gridGap={15}>
        {result.data?.pages[0].data.posts.map((post: object) => {
          return (
            <S.GridItem key={post.id}>
              <img src={testImg} alt="썸네일" />
            </S.GridItem>
          );
        })}
      </S.BoardGrid>
    </S.Wrap>
  );
}
