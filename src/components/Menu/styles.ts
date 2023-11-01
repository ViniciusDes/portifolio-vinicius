import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.header<{ isOpen?: boolean }>`
  position: fixed;
  width: 250px;
  height: 100vh;
  background: #000;
  z-index: 1;

  transition-property: left;
  transition-duration: 0.3s;

  @media screen and (max-width: 1200px) {
    left: ${({ isOpen }) => (isOpen ? "0!important" : "-400px")};
    left: -400px;
  }
`;

export const ContainerLogo = styled.div`
  height: 20rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 65px 25px 25px;

  &::after {
    content: "";
    position: absolute;
    top: -180px;
    left: -50px;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 0 0 50% 50%;
    width: 310px;
    height: 310px;
    background: ${theme.colors.green_primary};
  }
  img {
    height: 100%;
    width: 100%;
  }
`;

export const WrapperLogo = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 100px;
  width: 100px;
  border: 5px solid #fff;
`;

export const TitleProfessional = styled.h5`
  color: #fff;
  letter-spacing: 7px;
  margin-top: 15px;
  text-transform: uppercase;
`;

export const ContainerMenuItems = styled.ul`
  padding-top: 45px;
  padding-bottom: 45px;

  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const MenuItem = styled.li`
  a {
    margin: 0;
    padding: 12px 30px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    -moz-transition: ease all 0.35s;
    -o-transition: ease all 0.35s;
    -webkit-transition: ease all 0.35s;
    transition: ease all 0.35s;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    line-height: 18px;
    :active {
      color: #2fbf71;
      font-weight: 600;
    }
  }

  span {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
  }
`;
