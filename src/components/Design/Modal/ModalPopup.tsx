/*
 * Created on Sat May 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";
import React, {
  ComponentProps,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Column, Row } from "../../Layouts";
import { Typography } from "@/components/Utilities";
import { Button } from "../Button";
import Modal from "./Modal";
import { lightThemeColor } from "@/styles/theme";

interface PopupProps {
  width?: 440 | 660;
  open?: boolean;
  fitContent?: boolean;
  children: React.ReactNode;
}

interface PopupEvents {
  onOpen?: () => void;
  onClose?: () => void;
}

interface PopupTitleProps {
  children: React.ReactNode;
  titleTypography?: ComponentProps<typeof Typography>;
}

interface PopupContentsProps {
  children: React.ReactNode;
}

interface PopupBottomProps {
  confirmText?: React.ReactNode;
  cancelText?: React.ReactNode;
  stretch?: boolean;
  onCancel?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  onConfirm?: (
    ev: React.MouseEvent<HTMLButtonElement>,
    hide: () => void
  ) => void;
}

type PopupContextType = Omit<PopupProps, "children"> & {
  hide: () => void;
  show: () => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

const ModalPopup = (props: PopupProps & PopupEvents) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(props.open);

  const show = () => {
    setIsOpen(true);
    props.onOpen?.();
  };

  const hide = () => {
    setIsOpen(false);
    props.onClose?.();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (props.open) {
      show();
    } else {
      hide();
    }
  }, [props.open]);

  if (!mounted) return;
  return (
    <PopupContext.Provider value={{ ...props, open: isOpen, show, hide }}>
      <Modal isOpen={isOpen} onClose={hide}>
        <StyledPopup
          width={props.width ?? 660}
          fitContent={Boolean(props.fitContent)}
        >
          {props.children}
        </StyledPopup>
      </Modal>
    </PopupContext.Provider>
  );
};

const Title = (props: PopupTitleProps) => {
  const popup = useContext(PopupContext);
  if (!popup) throw Error("ModalPopup Context가 없습니다.");

  return (
    <StyledPopupTitle>
      {typeof props.children === "string" ? (
        <Typography
          {...props.titleTypography}
          typoSize={props.titleTypography?.typoSize ?? "Head6"}
        >
          {props.children}
        </Typography>
      ) : (
        props.children
      )}
    </StyledPopupTitle>
  );
};

const Contents = (props: PopupContentsProps) => {
  const popup = useContext(PopupContext);
  if (!popup) throw Error("ModalPopup Context가 없습니다.");

  return (
    <StyledPopupContents width={popup.width ?? 660}>
      {props.children}
    </StyledPopupContents>
  );
};

const Bottom = (props: PopupBottomProps) => {
  const popup = useContext(PopupContext);

  const hide = () => {
    if (!popup) throw Error("ModalPopup Context가 없습니다.");
    popup?.hide();
  };

  const cancel = (ev: React.MouseEvent<HTMLButtonElement>) => {
    props.onCancel?.(ev);
    hide();
  };

  const confirm = (ev: React.MouseEvent<HTMLButtonElement>) => {
    props.onConfirm?.(ev, hide);
  };

  const buttonCSS = {
    width: props.stretch ? "100%" : "auto",
    minWidth: "185px",
    minHeight: "33px",
  };

  if (!popup) throw Error("ModalPopup Context가 없습니다.");

  return (
    <StyledPopupBottom gap={8} horizonAlign="center">
      {props.cancelText && (
        <Button
          size="l"
          css={buttonCSS}
          filled="contained"
          backgroundColor="white"
          onClick={cancel}
          style={{
            border: `1px solid ${lightThemeColor.neutral_20}`,
            borderRadius: 12,
          }}
          color="neutral_40"
        >
          {props.cancelText}
        </Button>
      )}
      {props.confirmText && (
        <Button
          size="l"
          css={buttonCSS}
          filled="contained"
          backgroundColor="secondary_80"
          onClick={confirm}
          style={{
            borderRadius: 12,
          }}
        >
          {props.confirmText}
        </Button>
      )}
    </StyledPopupBottom>
  );
};

Title.displayName = "ModalPopupTitle";
ModalPopup.Title = Title;

Contents.displayName = "ModalPopupContents";
ModalPopup.Contents = Contents;

Bottom.displayName = "ModalPopupBottomBar";
ModalPopup.Bottom = Bottom;

export default ModalPopup;

const getPopupHeight = (width: 440 | 660, fitContent: boolean) => {
  if (width === 660) {
    return fitContent ? "auto" : "160px";
  }
  return "auto";
};

const getPopupMaxHeight = (width: 440 | 660) => {
  return width === 440 ? "640px" : "auto";
};

const getPopupMinHeight = (width: 440 | 660) => {
  return width === 440 ? "240px" : "auto";
};

const StyledPopup = styled(Column)<{ width: 440 | 660; fitContent: boolean }>`
  border-radius: 12px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.2);
  width: ${({ width }) => width}px;
  height: ${({ fitContent, width }) => getPopupHeight(width, fitContent)};
  min-height: ${({ width }) => getPopupMinHeight(width)};
  max-height: ${({ width }) => getPopupMaxHeight(width)};
`;

const StyledPopupTitle = styled(Column)`
  width: 100%;
  overflow-y: auto;
  margin: 20px 0px 8px 0px;
  justify-content: center;
  align-items: center;
`;

const StyledPopupContents = styled(Column)<{ width: 440 | 660 }>`
  width: 100%;
  overflow-y: auto;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  max-height: ${({ width }) => {
    if (width === 660) {
      return "640px";
    }
  }};
`;

const StyledPopupBottom = styled(Row)`
  margin-top: auto;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.white};
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
