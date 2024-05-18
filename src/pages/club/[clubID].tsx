/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

import * as Club from "@/containers/Club";
import { Row } from "@/components/Layouts";
import { SwitchCase } from "@/components/Utilities";
import { clubAPI } from "@/apis";
import { useClubDetail } from "@/hooks/club";
import queryClient from "@/globalState/queryClient";

const CLUB_TABS: Record<string, string> = {
  home: "홈",
  community: "커뮤니티",
  gallery: "갤러리",
  calendar: "캘린더",
  review: "리뷰",
  apply: "지원하기",
  manage: "관리",
};

export default function ClubPage({ clubID }: { clubID: number }) {
  const router = useRouter();

  const currentTab = !router.query.tab
    ? "home"
    : typeof router.query.tab === "string"
      ? router.query.tab
      : router.query.tab[0];

  const [tab, setTab] = useState<string>(currentTab);

  const { data: detail } = useClubDetail(Number(clubID));

  const changeTab = (to: string) => {
    router.push(
      { pathname: router.pathname, query: { ...router.query, tab: to } },
      undefined,
      { shallow: true }
    );

    setTab(to);
  };

  useEffect(() => {
    if (!clubID) return;
  }, [clubID]);

  useEffect(() => {
    if (!tab || !CLUB_TABS[tab]) {
      changeTab("home");
    }
  }, [tab]);

  if (!tab) return;
  return (
    <Row css={{ height: "100%" }}>
      <Head>
        <title>동그라미 - {detail?.club.name}</title>
      </Head>
      <Club.Sidebar tabList={CLUB_TABS} changeTab={changeTab} />
      <div
        css={{
          width: "100%",
          height: "100%",
        }}
      >
        <SwitchCase
          condition={tab}
          cases={{
            home: <Club.Home clubID={clubID} />,
            community: <Club.Notice />,
            gallery: <Club.Activity />,
            calendar: <Club.Schedule />,
            review: <Club.Review />,
            apply: <Club.Apply clubID={clubID} />,
            manage: <Club.Manage />,
          }}
        />
      </div>
    </Row>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  const clubID = params?.clubID;

  if (!clubID) throw "일치하는 동아리가 없습니다.";

  try {
    await queryClient.prefetchQuery({
      queryKey: ["GET_CLUB_DETAIL", { clubID }],
      queryFn: async () =>
        (await clubAPI.clubFindOneOrNotFound(Number(clubID))).data,
    });

    await queryClient.prefetchQuery({
      queryKey: ["GET_CLUB_MEMBERS", { clubID }],
      queryFn: async () =>
        (await clubAPI.clubFindAllMembers(Number(clubID))).data,
    });

    return {
      props: {
        clubID: typeof clubID === "string" ? Number(clubID) : Number(clubID[0]),
        dehydratedProps: dehydrate(queryClient),
      },
    };
  } catch {
    throw Error("서버 요청에 실패했습니다. 개발자에게 문의해주세요.");
  }
};
