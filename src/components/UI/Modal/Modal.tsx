/*
 * Created on Fri Jan 19 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CSSInterpolation } from "@emotion/css";
import FocusTrapReact from "focus-trap-react";

import { validator } from "@/utils";

import * as S from "./emotion";

export default function Modal({
  children,
  isOpen = false,
  focusTrap = false,
  shouldCloseToClickOutside = true,
  horizonAlign = "center",
  verticalAlign = "center",
  ...rest
}: {
  children: React.ReactNode;
  isOpen?: boolean;
  shouldCloseToClickOutside?: boolean;
  horizonAlign?: "center" | "left" | "right";
  verticalAlign?: "center" | "top" | "bottom";
  customStyle?: CSSInterpolation;
  focusTrap?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}) {
  const [show, setShow] = useState(isOpen);

  const FocusTrap = focusTrap ? FocusTrapReact : React.Fragment;

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

  useEffect(() => {
    if (show) {
      rest.onOpen?.();
    }
  }, [show]);

  if (!show || !validator.isClient) return;
  return (
    <>
      {createPortal(
        <FocusTrap>
          <S.ModalWrapper
            className="modal-dimmed"
            horizonAlign={horizonAlign}
            verticalAlign={verticalAlign}
            css={rest.customStyle}
            onClick={handleClose}
          >
            {children}
          </S.ModalWrapper>
        </FocusTrap>,
        document.body
      )}
    </>
  );
}
