/*
 * Created on Sat Feb 24 2024
 *
 * Copyright (c) 2024 Your Company
 */

import styled from "@emotion/styled";

import { Column, Row } from "@/components";
import { Converter } from "@/utils";

export const SidebarWrapper = styled(Column.ul)<{ isOpen: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.color.secondary_10};
  height: 100%;
  width: ${({ isOpen }) =>
    isOpen ? Converter.pxToRem(289) : Converter.pxToRem(100)};
  transition: 0.5s width;
  border-right: 1px solid ${({ theme }) => theme.color.neutral_10};
`;

export const SidebarToggleArrow = styled(Row.button)<{ isOpen: boolean }>`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 0;
  width: 30px;
  height: 30px;
  transform: translateX(50%);
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.secondary_100};
  cursor: pointer;
  svg {
    transform: rotate(${({ isOpen }) => (isOpen ? 0 : "180deg")});
    transition: 0.5s transform;
  }
  &:hover {
    background: ${({ theme }) => theme.color.secondary_80};
  }
`;

export const TabItem = styled(Row.li)<{ selected: boolean }>`
  width: 100%;
  overflow: hidden;
  &:hover {
    background: ${({ theme }) => theme.color.secondary_30};
  }
  cursor: pointer;
  button {
    width: 100%;
    padding: 10px 0 10px 30px;
    border: none;
    background: none;
    cursor: pointer;
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &:hover {
      div {
        svg {
          fill: ${({ theme, selected }) => !selected && theme.color.neutral_40};
        }
      }
      span {
        color: ${({ theme, selected }) => !selected && theme.color.neutral_40};
      }
    }
  }
`;
