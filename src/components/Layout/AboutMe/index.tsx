import React from "react";

import * as S from "./styles";
import { Col } from "@/styles";

const AboutMe: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Sobre mim</S.Title>

      <Col gap="2rem" mg="2rem 0 0 0">
        <S.TextAboutMe>
          Desenvolvedor Front-end com +3 anos de experiência.
        </S.TextAboutMe>

        <S.TextDetailAboutMe>
          Sou desenvolvedor front-end, no decorrer da minha experiência pude
          entregar diversas soluções com escalabilidade, código limpo,
          responsivas, e com boa experiência do usuário, trabalhando com vários
          modelos de negócios, tais como:
          <br />
          Sistemas ERP, SaaS, Sistemas de gerênciamento por demanda, entre
          outros.
          <br />
          Trabalhei resolvendo alguns dos principais problemas de experência de
          usuário, migração de sistemas, refatorando projetos, mudança de
          arquitetura trabalhando com Micro-Frontends, melhorando processos de
          deploy e implantação de software (CI).
        </S.TextDetailAboutMe>

        <h3>
          Sou uma pessoa volátil que ama resolver problemas, estou sempre em
          busca de conhecimento e prática para aprimorar meus conhecimentos e
          habilidades, em contra-partida entregar excelente soluções.
        </h3>

        <h3>Fora dos códigos, amo esportes, cuidar da minha saúde e viajar.</h3>
      </Col>
    </S.Container>
  );
};

export default AboutMe;
