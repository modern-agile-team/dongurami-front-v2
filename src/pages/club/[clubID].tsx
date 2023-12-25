/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Button, Row, SwitchCase } from "@/components";
import { Club } from "@/containers";

const CLUB_TABS = {
  home: "홈",
  notice: "공지",
  activity: "활동",
  schedule: "일정",
  review: "후기",
  apply: "지원서 작성",
};

export default function ClubPage() {
  const router = useRouter();
  const { clubID, tab } = router.query;

  const currentTab = useMemo(
    () =>
      typeof tab === "string" ? (tab as keyof typeof CLUB_TABS) : undefined,
    [tab]
  );

  const changeTab = (to: keyof typeof CLUB_TABS) => {
    router.push(
      { pathname: router.pathname, query: { ...router.query, tab: to } },
      undefined,
      { shallow: true }
    );
  };

  const handleClickTabButton = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const target = ev.currentTarget as HTMLButtonElement;
    const tab = target.dataset["tab"] as keyof typeof CLUB_TABS;
    changeTab(tab);
  };

  useEffect(() => {
    if (!clubID) return;
    if (!currentTab || !CLUB_TABS[currentTab]) {
      changeTab("home");
    }
  }, [clubID, currentTab]);

  if (!currentTab) return;
  return (
    <div>
      <Head>
        <title>동그라미 - {clubID} 동아리</title>
      </Head>
      <Row.ul gap={8}>
        {Object.entries(CLUB_TABS).map(([tabKey, tabValue]) => (
          <Row.li key={tabKey}>
            <Button
              data-tab={tabKey}
              filled="contained"
              onClick={handleClickTabButton}
            >
              {tabValue}
            </Button>
          </Row.li>
        ))}
      </Row.ul>
      <SwitchCase
        condition={currentTab}
        cases={{
          home: <Club.Home />,
          notice: <Club.Notice />,
          activity: <Club.Activity />,
          schedule: <Club.Schedule />,
          review: <Club.Review />,
          apply: <Club.Apply />,
        }}
      />
    </div>
  );
}
