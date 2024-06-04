/*
 * Created on Sat May 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Typography } from "@/components/Utilities";
import * as S from "./emotion";

interface ManageHeaderProps {
  setManageTab: React.Dispatch<
    React.SetStateAction<"member" | "applyMember" | "applyForm">
  >;
}

export default function ManageHeader({ setManageTab }: ManageHeaderProps) {
  return (
    <S.Wrap verticalAlign="center">
      <S.HeaderBtn onClick={() => setManageTab("member")}>
        <Typography typoSize="Head8" typoColor="white">
          동아리원관리
        </Typography>
      </S.HeaderBtn>
      <S.HeaderBtn onClick={() => setManageTab("applyMember")}>
        <Typography typoSize="Head8" typoColor="white">
          지원자리스트
        </Typography>
      </S.HeaderBtn>
      <S.HeaderBtn onClick={() => setManageTab("applyForm")}>
        <Typography typoSize="Head8" typoColor="white">
          지원서관리
        </Typography>
      </S.HeaderBtn>
    </S.Wrap>
  );
}
