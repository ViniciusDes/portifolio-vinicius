"use client";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { Col, Row } from "@/styles";
import AboutMe from "@/components/Layout/AboutMe";

export default function Home() {
  const [textProfession, setTextProfession] = useState("De");
  let characters = "senvolvedor de software".split("");

  const completeTextProfession = async () => {
    const time = setInterval(() => {
      if (characters.length)
        setTextProfession((oldState) => String(oldState + characters.at(0)));
      setTimeout(() => {
        if (characters.length) {
          characters.shift();
        } else {
          clearInterval(time);
        }
      }, 50);
    }, 125);
  };

  useEffect(() => {
    if (!textProfession.includes(characters.join(""))) {
      completeTextProfession();
    }
  }, []);

  return (
    <div
      style={{
        height: "100%",
        overflowY: "scroll",
        scrollBehavior: "smooth",
      }}
    >
      <S.WrapperContent id="home">
        <Row>
          <Col gap="0.8rem" pd="0 3rem" wd="80%">
            <h3>Olá, eu sou</h3>
            <h1>Vinícius Silva</h1>
            <h2>
              {textProfession}
              <span>|</span>
            </h2>

            <h3>
              Sou desenvolvedor de software, com conhecimento aprofundado em
              front-end.
              <br />
              Entreguei soluções com diversas atuações em: criação de novos
              projetos, migração de tecnologia, mudança de arquitetura para
              Micro-Frontends, atuação em projetos paralelos de forma autônoma.
            </h3>
          </Col>
        </Row>
      </S.WrapperContent>
      <S.WrapperContent id="aboutme">
        <AboutMe />
      </S.WrapperContent>
    </div>
  );
}
