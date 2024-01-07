import React from "react";
import Logo from "@/assets/logo-professional.jpeg";
import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useHeader } from "@/hooks/useHeader";

const Menu: React.FC = () => {
  const { isOpenMenu } = useHeader();
  console.log("isOpenMenu", isOpenMenu);
  return (
    <S.Container isOpen={isOpenMenu}>
      <S.ContainerLogo>
        <S.WrapperLogo>
          <Image src={Logo} alt="logo" />
        </S.WrapperLogo>
        <S.TitleProfessional>Vinícius</S.TitleProfessional>
      </S.ContainerLogo>

      <S.ContainerMenuItems>
        <S.MenuItem data-menuanchor="home">
          <Link href="#home">
            <span>Home</span>
          </Link>
        </S.MenuItem>
        <S.MenuItem data-menuanchor="aboutme">
          <Link href="#aboutme">
            <span>Sobre mim</span>
          </Link>
        </S.MenuItem>
        <S.MenuItem data-menuanchor="experience">
          <Link href="#experience">
            <span>Experiência</span>
          </Link>
        </S.MenuItem>
      </S.ContainerMenuItems>
    </S.Container>
  );
};

export default Menu;
