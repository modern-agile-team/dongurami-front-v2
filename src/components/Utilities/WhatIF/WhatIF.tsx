/*
 * Created on Thu Nov 16 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React from "react";

interface WhatIF {
  condition: boolean;
  children: React.ReactNode;
  falsy?: React.ReactNode;
}

/**
 *
 * @param condition 조건 (boolean)
 * @param children 조건이 참일 경우 렌더링할 컴포넌트
 * @param falsy 조건이 거짓일 경우 렌더링할 컴포넌트
 */
export default function WhatIF({ condition, children, falsy }: WhatIF) {
  return <>{condition ? children : falsy}</>;
}
