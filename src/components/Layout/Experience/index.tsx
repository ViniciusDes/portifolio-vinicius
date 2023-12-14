import { Col } from "@/styles";
import * as S from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Experience() {
  const { width: widthScreen } = useWindowDimensions();
  // const widthScreen = 1200;

  return (
    <S.Container>
      <S.Title>Experiência</S.Title>

      <S.WrapperContent>
        <S.WrapperExperience>
          <S.WrapperLogoCompany>
            {widthScreen > 720 && (
              <Icon icon="material-symbols:work" fontSize={100} />
            )}
            <h2>Saibweb Tecnologia</h2>
          </S.WrapperLogoCompany>
          <Col gap="0.5rem">
            <S.TitleExperience>Desenvolvedor Front-end</S.TitleExperience>

            <S.PeriodExperience>Fevereiro 2021 - Presente</S.PeriodExperience>

            <S.DescriptionExperience>
              Atualmente atuo como desenvolvedor Frontend, construindo padrões,
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
              (Module Federation, Webpack), Git - Gitflow
            </S.DescriptionExperience>
          </Col>

          <S.TimeWorks>Full time</S.TimeWorks>
        </S.WrapperExperience>

        <S.WrapperExperience>
          <S.WrapperLogoCompany>
            {widthScreen > 720 && (
              <Icon icon="material-symbols:work" fontSize={100} />
            )}
            <h2>Leadup</h2>
          </S.WrapperLogoCompany>
          <Col gap="0.5rem">
            <S.TitleExperience>Desenvolvedor Front-end</S.TitleExperience>

            <S.PeriodExperience>Junho 2022 - Dez. 2022</S.PeriodExperience>

            <S.DescriptionExperience>
              Trabalhei em regime part-time, atuando à noite ou aos fins de
              semana como desenvolvedor em projetos em React. Nestes projetos,
              fui responsável pela implementação das interfaces já desenhadas
              pelo time de UX/UI e pela implementação das regras de negócio
              documentadas pelo time de produto. O principal projeto que
              trabalhei é um sistema SaaS com foco em vistorias veiculares e/ou
              imóveis. Para construir essas interfaces.
              <br />
              Utilizei: HTML, CSS, TypeScript, React, Zustand para gerenciamento
              de estado, Git - Gitflow e Material-UI.
            </S.DescriptionExperience>
          </Col>

          <S.TimeWorks>Part time</S.TimeWorks>
        </S.WrapperExperience>

        <S.WrapperExperience>
          <S.WrapperLogoCompany>
            {widthScreen > 720 && (
              <Icon icon="material-symbols:work" fontSize={100} />
            )}
            <h2>Freelancer </h2>
          </S.WrapperLogoCompany>
          <Col gap="0.5rem">
            <S.TitleExperience>Desenvolvedor Front-end</S.TitleExperience>

            <S.PeriodExperience>Jan. 2021 - Agosto 2023</S.PeriodExperience>

            <S.DescriptionExperience>
              Trabalhei como freelancer em curtos projetos paralelos sempre em
              busca de mais conhecimento. Atuei em pequenas demandas e também
              atuei em projetos que as vezes fui contratado por outro
              desenvolvedor.
              <br />
              Trabalhei com: HTML, CSS, TypeScript, React, Redux, Context API,
              Git - Gitflow e Material-UI.
            </S.DescriptionExperience>
          </Col>

          <S.TimeWorks>freelancer</S.TimeWorks>
        </S.WrapperExperience>
      </S.WrapperContent>
    </S.Container>
  );
}
