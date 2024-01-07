import React, { useEffect, useState } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { Col, Row } from "@/styles";
import * as S from "../styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { theme } from "@/styles/theme";

interface ExperienceComponentProps {
  company: string;
  witchTime: string;
  position: string;
  description: string;
  period: string;
}
const ExperienceComponent: React.FC<ExperienceComponentProps> = ({
  company,
  description,
  position,
  witchTime,
  period,
}) => {
  const { width: widthScreen } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(widthScreen < 720);
  }, [widthScreen]);

  return (
    <S.WrapperExperience>
      <Row wd={isMobile ? "100%" : "auto"} jContent="space-between">
        <S.WrapperLogoCompany>
          <Icon icon="material-symbols:work" fontSize={!isMobile ? 100 : 0} />
          <h2>{company}</h2>
        </S.WrapperLogoCompany>
        <S.TimeWorks show={isMobile}>{witchTime}</S.TimeWorks>
      </Row>
      <Col gap="0.5rem">
        <Row wd={isMobile ? "auto" : "100%"} jContent="space-between">
          <S.TitleExperience>{position}</S.TitleExperience>
          <S.TimeWorks show={!isMobile}>{witchTime}</S.TimeWorks>
        </Row>

        <S.PeriodExperience>{period}</S.PeriodExperience>

        <S.DescriptionExperience
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Col>
    </S.WrapperExperience>
  );
};

export default ExperienceComponent;
