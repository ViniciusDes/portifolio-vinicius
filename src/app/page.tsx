"use client";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { Col, Row } from "@/styles";
import AboutMe from "@/components/Layout/AboutMe";
import IAm from "@/components/Layout/Home";
import Experience from "@/components/Layout/Experience";

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
    <S.Container>
      <S.WrapperContent id="home">
        <IAm textProfession={textProfession} />
      </S.WrapperContent>
      <S.WrapperContent id="aboutme">
        <AboutMe />
      </S.WrapperContent>
      <S.WrapperContent id="experience">
        {typeof window !== "undefined" && <Experience />}
      </S.WrapperContent>
    </S.Container>
  );
}
