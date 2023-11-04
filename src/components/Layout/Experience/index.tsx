import { Col, Row } from "@/styles";
import * as S from "./styles";
import Image from "next/image";
import LogoSaib from "@/assets/logo-saib.webp";
export default function Experience() {
  return (
    <S.Container>
      <S.Title>Experiência</S.Title>

      <S.WrapperContent>
        <S.WrapperExperience>
          <S.WrapperLogoCompany>
            <Image src={LogoSaib} alt="logo-company" />
            <p>Saibweb Tecnologia</p>
          </S.WrapperLogoCompany>
          <Col gap="0.5rem">
            <S.TitleExperience>Desenvolvedor de Frontend</S.TitleExperience>

            <S.PeriodExperience>Fevereiro 2021 - Presente</S.PeriodExperience>

            <S.DescriptionExperience>
              Atualmente atuo como desenvolvedor Frontend, sendo ativamente um
              dos principais responsáveis pelo desenvolvimento de Frontend
              construindo padrões, tendo decisões importantes para melhoria de
              todo processo de desenvolvimento de projetos em Sistemas ERP
              focados em indústrias e varejistas do ramo de bebidas. Ao longo
              dessa trajetória, tenho desempenhado um papel fundamental no
              levantamento e validação de requisitos e regras de negócio, além
              de realizar análise de código de colegas. Para isso trabalhei com
              uma gama de tecnologias em minhas atividades, tais como HTML, CSS,
              React, Styled- Components, JavaScript, TypeScript, jQuery, NextJS,
              Material-UI e React Materialize, Micro- frontend(Module
              Federation, Webpack)
            </S.DescriptionExperience>
          </Col>

          <S.TimeWorks>Full time</S.TimeWorks>
        </S.WrapperExperience>
      </S.WrapperContent>
    </S.Container>
  );
}
