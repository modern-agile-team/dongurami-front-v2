/*
 * Created on Sat May 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import * as S from "./emotion";

export default function SearchBar() {
  function handleSearchBtn() {
    console.log(1);
  }
  return (
    <S.Wrap horizonAlign="center" verticalAlign="center">
      <S.InputWrapper>
        <S.IntputBar placeholder="이름을 검색해보세요." />
        <S.SubmitIcon
          name="Search30"
          onClick={handleSearchBtn}
          fill="primary_100"
        />
      </S.InputWrapper>
    </S.Wrap>
  );
}
