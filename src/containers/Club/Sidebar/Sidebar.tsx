/*
 * Created on Fri Feb 23 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useRouter } from "next/router";
import { useState } from "react";

import * as S from "./emotion";
import { Icon } from "@/components/Svg";
import { Typography } from "@/components/Utilities";
import { Row } from "@/components/Layouts";

interface IClubSidebar {
  tabList: Record<string, string>;
}

export default function Sidebar({ tabList }: IClubSidebar) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const currentTab = router.query.tab as string;

  const changeTab = (to: string) => {
    router.push(
      { pathname: router.pathname, query: { ...router.query, tab: to } },
      undefined,
      { shallow: true }
    );
  };

  const handleClickTabButton = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const target = ev.currentTarget as HTMLButtonElement;
    const tab = target.dataset["tab"] as string;
    changeTab(tab);
  };

  return (
    <S.SidebarWrapper isOpen={isOpen}>
      <S.SidebarToggleArrow
        verticalAlign="center"
        horizonAlign="center"
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Icon name="LeftArrow24" size={15} fill="neutral_10" />
      </S.SidebarToggleArrow>
      {Object.keys(tabList).map((tab) => {
        const selected = tab === currentTab;
        return (
          <S.TabItem key={tab} selected={selected}>
            <Row.button
              gap={30}
              data-tab={tab}
              onClick={handleClickTabButton}
              verticalAlign="center"
            >
              <div>
                <Icon
                  name="Heart24"
                  size={40}
                  fill={selected ? "primary_100" : "neutral_20"}
                />
              </div>
              <Typography
                typoSize="Head4"
                typoColor={selected ? "primary_100" : "neutral_20"}
              >
                {tabList[tab]}
              </Typography>
            </Row.button>
          </S.TabItem>
        );
      })}
    </S.SidebarWrapper>
  );
}
