/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Club } from "@/containers";
import { Row } from "@/components/Layouts";
import { SwitchCase } from "@/components/Utilities";

const CLUB_TABS: Record<string, string> = {
  home: "홈",
  community: "커뮤니티",
  gallery: "갤러리",
  calendar: "캘린더",
  review: "리뷰",
  apply: "지원하기",
  manage: "관리",
};

export default function ClubPage() {
  const router = useRouter();
  const { clubID, tab } = router.query as { clubID: string; tab?: string };

  const changeTab = (to: string) => {
    router.push(
      { pathname: router.pathname, query: { ...router.query, tab: to } },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    if (!clubID) return;
    if (!tab || !CLUB_TABS[tab]) {
      changeTab("home");
    }
  }, [clubID, tab]);

  if (!tab) return;
  return (
    <Row css={{ height: "100%" }}>
      <Head>
        <title>동그라미 - 모던 애자일</title>
      </Head>
      <Club.Sidebar tabList={CLUB_TABS} />
      <div
        css={{
          width: "100%",
          height: "100%",
        }}
      >
        <SwitchCase
          condition={tab}
          cases={{
            home: <Club.Home />,
            community: <Club.Notice />,
            gallery: <Club.Activity />,
            calendar: <Club.Schedule />,
            review: <Club.Review />,
            apply: <Club.Apply />,
          }}
        />
      </div>
    </Row>
  );
}
