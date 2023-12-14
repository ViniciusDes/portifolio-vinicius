"use client";
import React from "react";
import * as S from "./styles";
import { useHeader } from "@/hooks/useHeader";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const Header: React.FC = () => {
  const { setIsOpenMenu, isOpenMenu } = useHeader();

  const { width } = useWindowDimensions();
  return (
    <S.Container visible={width <= 1200 ? "true" : "false"}>
      <h2>Vinícius</h2>

      <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <span />
        <span />
        <span />
      </button>
    </S.Container>
  );
};

export default Header;
