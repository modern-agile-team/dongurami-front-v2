import { useRouter } from "next/router";
import { useState } from "react";

import * as S from "./emotion";
import { Typography } from "@/components";

export default function SearchWriter() {
  const router = useRouter();

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
          placeholder="Enter your search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </S.WrapSearch>

      <S.WrapButton onClick={handleClickPostWrite}>
        <Typography typoColor="white" typoSize="Head5">
          글쓰기
        </Typography>
      </S.WrapButton>
    </S.Container>
  );
}
