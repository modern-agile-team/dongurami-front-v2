import React, { useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

import styles from "@/styles/Home.module.css";
import { Button, Column, Modal, Row, Typography, WhatIF } from "@/components";
import { signIn } from "next-auth/react";
import * as Svg from "@/components/Svg";
import { Header } from "@/components/UI/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [state, setState] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  if (state >= 5) throw new Error("에러");

  return (
    <>
      <Column>
        <Header />

        <Row>
          <Button
            onClick={() => {
              setState(state + 1);
            }}
          >
            에러 테스트 <br /> 5번 클릭하면 에러 발생
          </Button>
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            모달 테스트
          </Button>
          <Modal
            isOpen={isOpen}
            focusTrap
            onOpen={() => {
              alert("열림");
            }}
            onClose={() => {
              alert("닫힘");
              setIsOpen(false);
            }}
          >
            <div css={{ width: "100px", height: "100px", background: "#487" }}>
              테스트
              <Button
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                닫기
              </Button>
            </div>
          </Modal>
        </Row>
      </Column>
    </>
  );
}
