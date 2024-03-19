import { useRouter } from "next/router";
import { useState } from "react";

import * as S from "./emotion";
import { useAuth } from "@/hooks";
import { Typography } from "@/components/Utilities";
import { Icon } from "@/components/Svg";

interface BoardType {
  type: string;
}

export default function SearchWriter({ type }: BoardType) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const [query, setQuery] = useState<string>("");

  const handleSearch = () => {
    console.log("Search query:", query);
  };

  function handleClickPostWrite() {
    router.push({
      pathname: `free/write/`,
    });
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.Container>
      <S.WrapSearch>
        <S.SearchButton color="#fff" onClick={handleSearch}>
          <Typography typoColor="white" typoSize="Head4">
            검색
          </Typography>
        </S.SearchButton>

        <S.Input
          type="text"
          placeholder="검색어를 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </S.WrapSearch>

      {/* 관리자 구분 값 필요 */}
      {!isLoggedIn && type === "free" ? (
        <S.WrapButton onClick={handleClickPostWrite}>
          <Icon name="Pan35" size={40} fill="neutral_10" />
          <Typography
            typoColor="white"
            typoSize="Head5"
            style={{ marginLeft: 11 }}
          >
            글쓰기
          </Typography>
        </S.WrapButton>
      ) : null}
    </S.Container>
  );
}
