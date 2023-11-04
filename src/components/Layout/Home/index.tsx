import React from "react";
import { Col, Row } from "@/styles";

interface IHome {
  textProfession: string;
}
const IAm: React.FC<IHome> = ({ textProfession }) => {
  return (
    <Row>
      <Col gap="0.8rem" wd="100%">
        <h3>Olá, eu sou</h3>
        <h1>Vinícius Silva</h1>
        <h2>
          {textProfession}
          <span>|</span>
        </h2>

        <h3>
          Sou desenvolvedor de software, com conhecimento aprofundado em
          front-end.
        </h3>
      </Col>
    </Row>
  );
};

export default IAm;
