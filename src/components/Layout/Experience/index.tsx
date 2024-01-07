import { Col, Row } from "@/styles";
import * as S from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import ExperienceComponent from "./ExperienceComponent";

export default function Experience() {
  const { width: widthScreen } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(widthScreen < 720);
  }, [widthScreen]);

  return (
    <S.Container>
      <S.Title>Experiência</S.Title>

      <S.WrapperContent>
        <ExperienceComponent
          company="Saibweb Tecnologia"
          period="Fevereiro 2021 - Presente"
          position="Desenvolvedor Front-end"
          witchTime="Full-time"
          description="Atualmente atuo como desenvolvedor Frontend, construindo padrões,
          tendo decisões importantes para melhoria de todo processo de
          desenvolvimento dos softwares que são Sistemas ERP focados em
          indústrias e varejistas do ramo de bebidas. Com essa experiência
          pude entregar módulos completos, com diversos tipos de atuações,
          sendo: construir páginas responsívas e com boa experiência de
          usuário, dar manutenção, refatorar projetos, melhorar arquitetura
          das aplicações para ter escalabilidade, automatização e
          melhorarias no processo de deploy/implantação de software,
          <br />
          Para resolver esses e outros problemas utilizei: HTML, CSS, React,
          Next, Redux, Context-API, Styled-Components, JavaScript,
          TypeScript, Material-UI e React Materialize, Micro-Frontends
          (Module Federation, Webpack), Git - Gitflow"
        />
        <ExperienceComponent
          company="Leadup"
          period="Junho 2022 - Dez. 2022"
          position="Desenvolvedor Front-end"
          witchTime="Part-time"
          description="Trabalhei em regime part-time, atuando à noite ou aos fins de
          semana como desenvolvedor em projetos em React. Nestes projetos,
          fui responsável pela implementação das interfaces já desenhadas
          pelo time de UX/UI e pela implementação das regras de negócio
          documentadas pelo time de produto. O principal projeto que
          trabalhei é um sistema SaaS com foco em vistorias veiculares e/ou
          imóveis. Para construir essas interfaces.
          <br />
          Utilizei: HTML, CSS, TypeScript, React, Zustand para gerenciamento
          de estado, Git - Gitflow e Material-UI."
        />
        <ExperienceComponent
          company="Freelancer"
          period="Jan. 2021 - Agosto 2023"
          position="Desenvolvedor Front-end"
          witchTime="Part-time"
          description="Trabalhei como freelancer em curtos projetos paralelos sempre em
          busca de mais conhecimento. Atuei em pequenas demandas e também
          atuei em projetos que as vezes fui contratado por outro
          desenvolvedor.
          <br />
          Trabalhei com: HTML, CSS, TypeScript, React, Redux, Context API,
          Git - Gitflow e Material-UI."
        />
        <ExperienceComponent
          company="Exe Outsourcing Office"
          period="Fev. 2020 - Jan. 2021"
          position="Estagiário Desenvolvedor Web"
          witchTime="Part-time 6h/dia"
          description="Trabalhei no desenvolvimento de frontend, backend e manipulação de banco de dados.
          <br />
          Todo desenvolvimento era feito em paralelo a levantamento de requisitos e reuniões para entender toda a regra de negócio. Os projetos tinha como foco automatizar processos internos da empresa que era feitos manualmente por Analistas de RH. Por exemplo validação de relatórios enviados pelas empresas planos de saúde e comparado com os dados que estavam salvos no banco de dados. Tecnologias usadas: HTML, CSS, JavaScript, React, C# e Node."
        />
      </S.WrapperContent>
    </S.Container>
  );
}
