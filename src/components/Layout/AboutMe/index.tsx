import React from "react";

import * as S from "./styles";
import Image from "next/image";
import FotoCLiff from "@/assets/foto-cliff.jpeg";
import { Col, Row } from "@/styles";
import Slide from "@/components/Slide";

const AboutMe: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Sobre mim</S.Title>

      <S.TextAboutMe>
        Desenvolvedor Front-end com +3 anos de experiência.
      </S.TextAboutMe>

      <S.TextDetailAboutMe>
        Sou desenvolvedor front-end, no decorrer da minha experiência pude
        entregar diversas soluções com escalabilidade, código limpo,
        responsivas, e com boa experiência do usuário, trabalhando com vários
        modelos de negócios, tais como:
        <br />
        <span>
          Sistemas ERP, SaaS, Sistemas de gerênciamento por demanda, entre
          outros.
        </span>
        <br />
        Trabalhei resolvendo alguns dos principais problemas de experência de
        usuário, migração de sistemas, refatorando projetos, mudança de
        arquitetura trabalhando com Micro-Frontends, melhorando processos de
        deploy e implantação de software (CI).
      </S.TextDetailAboutMe>

      <h3>
        Eu gosto de desafios e estou sempre em busca de conhecimento e pratica
        para aprimorar meus conhecimentos e habilidades, em contra-partida
        entregar excelente soluções.
      </h3>

      <Slide />
    </S.Container>
  );
};

export default AboutMe;
