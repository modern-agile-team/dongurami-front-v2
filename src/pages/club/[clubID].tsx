/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";

import { Button, Row, SwitchCase } from "@/components";

const CLUB_TABS = {
  HOME: "HOME",
  NOTICE: "NOTICE",
  ACTIVITIES: "ACTIVITIES",
  CALENDAR: "CALENDAR",
  REVIEW: "REVIEW",
  APPLY: "APPLY",
};

export default function ClubPage() {
  const router = useRouter();
  const clubID = useMemo(() => router.query.clubID as string | undefined, [router.query.clubID]);
  const currentTab = useMemo(() => router.query.tab as keyof typeof CLUB_TABS | undefined, [router.query.tab]);

  const changeTab = (to: keyof typeof CLUB_TABS) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, tab: to },
      },
      undefined,
      {
        shallow: true,
      }
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
      changeTab("HOME");
    }
  }, [clubID, currentTab]);

  if (!currentTab) return;
  return (
    <div>
      <Row.ul>
        {Object.values(CLUB_TABS).map((tab) => (
          <Row.li key={tab}>
            <Button data-tab={tab} filled="contained" onClick={handleClickTabButton}>
              {tab}
            </Button>
          </Row.li>
        ))}
      </Row.ul>
      <SwitchCase
        condition={currentTab}
        cases={{
          HOME: <div>홈</div>,
          NOTICE: <div>공지</div>,
          ACTIVITIES: <div>활동</div>,
          CALENDAR: <div>일정</div>,
          REVIEW: <div>후기</div>,
          APPLY: <div>지원</div>,
        }}
      />
    </div>
  );
}
