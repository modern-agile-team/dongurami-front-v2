/*
 * Created on Sat May 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useState, useRef, useEffect } from "react";

import * as S from "./emotion";

interface OptionInterface {
  name: string;
  value: string;
}
interface SelectboxProps {
  options: OptionInterface[];
  defaultName: string;
  isRequired: boolean;
  setSelectOption: (result: OptionInterface) => OptionInterface; // setState or object
}

export default function SelectBox({
  options,
  defaultName = "값을 선택하세요.",
  isRequired = false,
  setSelectOption,
}: SelectboxProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedName, setSelectedName] = useState(defaultName);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  function handleOnChangeOption(e: any) {
    setSelectedName(e.target.innerHTML);
    setSelectedIndex(e.target.id);
  }

  useEffect(() => {
    if (selectedIndex >= 0) setSelectOption(options[selectedIndex]);
  }, [selectedIndex]);

  return (
    <S.SelectBoxWrap
      onClick={() => setIsOpen(!isOpen)}
      verticalAlign="center"
      horizonAlign="center"
    >
      <S.SelectedDiv verticalAlign="center" horizonAlign="center">
        {isRequired ? <S.RequireNotice>*</S.RequireNotice> : <></>}
        <label>{selectedName}</label>
        <span>⌵</span>
      </S.SelectedDiv>
      <S.OptionUl isShow={isOpen}>
        {options.map((option, idx) => {
          return (
            <S.OptionListItem
              key={idx}
              id={String(idx)}
              onClick={handleOnChangeOption}
            >
              {option.name}
            </S.OptionListItem>
          );
        })}
      </S.OptionUl>
    </S.SelectBoxWrap>
  );
}
