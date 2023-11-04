import React from "react";

import * as S from "./styles";
import { Col } from "@/styles";

import IconReact from "@/assets/icons8-react-a-javascript-library-for-building-user-interfaces-24.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Slide: React.FC = () => {
  return (
    <S.Container>
      <S.SliderList>
        <li>
          <Icon icon="devicon:javascript" width="60" />
          <p>JavaScript</p>
        </li>
        <li>
          <Icon icon="devicon:typescript" width="60" />
          <p>Typescript</p>
        </li>
        <li>
          <Icon icon="devicon:react" width="60" />
          <p>React</p>
        </li>
        <li>
          <Icon icon="logos:nextjs-icon" width="60" />
          <p>NextJS</p>
        </li>
        <li>
          <Icon icon="devicon:docker-wordmark" width="60" />
          <p>Docker</p>
        </li>
        <li>
          <Icon icon="logos:webpack" width="60" />
          <p>Module Federation</p>
        </li>
        <li>
          <Icon icon="devicon:materialui" width="60" />
          <p>Material UI</p>
        </li>
        <li>
          <Icon icon="devicon:javascript" width="60" />
          <p>JavaScript</p>
        </li>
        <li>
          <Icon icon="devicon:typescript" width="60" />
          <p>Typescript</p>
        </li>
        <li>
          <Icon icon="devicon:react" width="60" />
          <p>React</p>
        </li>
        <li>
          <Icon icon="logos:nextjs-icon" width="60" />
          <p>NextJS</p>
        </li>
        <li>
          <Icon icon="devicon:docker-wordmark" width="60" />
          <p>Docker</p>
        </li>
        <li>
          <Icon icon="logos:webpack" width="60" />
          <p>Module Federation</p>
        </li>
        <li>
          <Icon icon="devicon:materialui" width="60" />
          <p>Material UI</p>
        </li>
        <li>
          <Icon icon="devicon:javascript" width="60" />
          <p>JavaScript</p>
        </li>
        <li>
          <Icon icon="devicon:typescript" width="60" />
          <p>Typescript</p>
        </li>
        <li>
          <Icon icon="devicon:react" width="60" />
          <p>React</p>
        </li>
        <li>
          <Icon icon="logos:nextjs-icon" width="60" />
          <p>NextJS</p>
        </li>
        <li>
          <Icon icon="devicon:docker-wordmark" width="60" />
          <p>Docker</p>
        </li>
        <li>
          <Icon icon="logos:webpack" width="60" />
          <p>Module Federation</p>
        </li>
        <li>
          <Icon icon="devicon:materialui" width="60" />
          <p>Material UI</p>
        </li>
      </S.SliderList>
    </S.Container>
  );
};

export default Slide;
