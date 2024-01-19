/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import * as S from "./emotion";

export default function Modal({
  children,
  isOpen = false,
  shouldCloseToClickOutside = true,
  ...rest
}: {
  children: React.ReactNode;
  isOpen?: boolean;
  shouldCloseToClickOutside?: boolean;
  onClose?: () => void;
}) {
  const [show, setShow] = useState(isOpen);

  const handleClose = (ev: React.MouseEvent) => {
    const target = ev.target as HTMLElement;
    if (
      !shouldCloseToClickOutside ||
      !target.classList.contains("modal-dimmed")
    )
      return;
    setShow(false);
    rest.onClose?.();
  };

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  if (!show || typeof window === "undefined") return;
  return (
    <>
      {createPortal(
        <S.ModalWrapper
          className="modal-dimmed"
          horizonAlign="center"
          verticalAlign="center"
          onClick={handleClose}
        >
          {children}
        </S.ModalWrapper>,
        document.body
      )}
    </>
  );
}
