import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  /* padding: 5rem 7rem; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3`
  color: #fff;
  margin: 0;
  position: relative;
  z-index: 1;
  font-weight: 300;
  font-size: 30px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 6px;

  &:before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    width: 60px;
    background: #2fbf71;
    height: 1px;
  }

  &:after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    bottom: -7px;
    left: 56px;
    right: 0;
    z-index: -1;
    background: #2fbf71;
  }
`;

export const WrapperContent = styled.div`
  margin-top: 1rem;

  background: ${theme.colors.blue_700};
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const WrapperExperience = styled.section`
  width: 100%;
  padding: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  display: flex;
  position: relative;

  @media screen and (max-width: 720px) {
    align-items: start;
    flex-direction: column;
  }

  img {
    width: 7rem;
    height: fit-content;
  }
`;

export const TitleExperience = styled.h2``;

export const PeriodExperience = styled.h3`
  font-weight: var(--font-rubik-300);
  font-size: 0.8rem;
`;

export const DescriptionExperience = styled.h3`
  font-weight: var(--font-rubik-300);
  font-size: 0.9rem;
`;

export const TimeWorks = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  padding: 5px;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #fff;

  background: ${theme.colors.green_primary};
`;

export const WrapperLogoCompany = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  padding: 0 1rem;
  height: max-content;
  width: 13rem;
  margin-top: -20px;

  @media screen and (max-width: 720px) {
    padding: 0;
    align-items: start;
    h2 {
      width: max-content;
      font-size: 1.3rem;
      margin: 1rem 0;
    }
  }
  h2 {
    font-size: 0.9rem;
  }

  &:after {
    content: " ";
    position: absolute;
    right: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    width: 1px;
  }
`;
