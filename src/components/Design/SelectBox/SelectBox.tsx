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
  const [isChanged, setIsChanged] = useState<boolean>(false);

  //마지막에 밖에다 빼줘야되는 정보
  // const returnOption:OptionInterface  = options[selectedIndex]

  function handleOnChangeOption(e: any) {
    setSelectedName(e.target.innerHTML);
    setSelectedIndex(e.target.id);
    setIsChanged(true);
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
      <label>{selectedName}</label>
      <S.OptionUl isShow={isOpen}>
        {options.map((option, idx) => {
          return (
            <li key={idx} id={String(idx)} onClick={handleOnChangeOption}>
              {option.name}
            </li>
          );
        })}
      </S.OptionUl>

      {!isChanged && isRequired ? <div>필수값입니다.</div> : <></>}
    </S.SelectBoxWrap>
  );
}
