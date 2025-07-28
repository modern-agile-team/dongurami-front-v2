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

interface ModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  shouldCloseToClickOutside?: boolean;
  horizonAlign?: "center" | "left" | "right";
  verticalAlign?: "center" | "top" | "bottom";
  customStyle?: CSSInterpolation;
  focusTrap?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export default function Modal({
  isOpen = false,
  focusTrap = false,
  shouldCloseToClickOutside = true,
  horizonAlign = "center",
  verticalAlign = "center",
  ...props
}: ModalProps) {
  const [show, setShow] = useState(isOpen);

  const FocusTrap = focusTrap ? FocusTrapReact : React.Fragment;

  const open = () => {
    setShow(true);
    props.onOpen?.();
  };

  const close = () => {
    setShow(false);
    props.onClose?.();
  };

  const handleClose = (ev: React.MouseEvent) => {
    const target = ev.target as HTMLElement;
    if (
      !shouldCloseToClickOutside ||
      !target.classList.contains("modal-dimmed")
    )
      return;
    close();
  };

  useEffect(() => {
    if (isOpen) {
      open();
    } else {
      close();
    }
  }, [isOpen]);

  if (!show || !validator.isClient) return;
  return (
    <>
      {createPortal(
        <FocusTrap>
          <S.ModalWrapper
            className="modal-dimmed"
            horizonAlign={horizonAlign}
            verticalAlign={verticalAlign}
            css={props.customStyle}
            onClick={handleClose}
          >
            {props.children}
          </S.ModalWrapper>
        </FocusTrap>,
        document.body
      )}
    </>
  );
}
