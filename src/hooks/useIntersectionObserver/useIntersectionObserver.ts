/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { useEffect, useRef, useState } from "react";

/**
 * @param callback 화면상에 표시됐을때 실행할 함수.
 * @param dependencies 의존성 배열
 * @param options IntersectionObserver 옵션
 * @returns ```tsx
 * 	type observerRef =  RefObject<E>; // 감지를 원하는 dom에 주입할 ref
 *  type isShow = boolean; // 해당 dom이 화면에 렌더됐는지 여부
 *
 * 	examples
 *  <li ref={index === list.length - 1 ? observerRef : null}/>
 * ```
 */
export default function useIntersectionObserver<E extends HTMLElement>(
  callback?: (node: IntersectionObserverEntry) => void,
  dependencies: React.DependencyList = [],
  options: IntersectionObserverInit = { threshold: 1, root: null, rootMargin: "0px 0px 0px 0px" }
) {
  const observerRef = useRef<E>(null);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const target = observerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsShow(entries[0].isIntersecting);
        callback && callback(entries[0]);
      },
      { ...options }
    );
    observer.observe(target);
    return () => {
      observer.unobserve(target);
    };
  }, [observerRef.current, ...dependencies]);

  return { observerRef, isShow };
}
