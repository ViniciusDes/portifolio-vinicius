import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 4rem;
  padding: 10px 5px;
  background: ${theme.colors.blue_600};

  display: flex;
  justify-content: space-between;

  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  padding: 1rem;

  h2 {
    color: #fff;
  }
  button {
    width: 2.6rem;
    padding: 20px;
    background: ${theme.colors.green_primary};
    position: relative;

    span {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 25px;
      height: 2px;
      margin: auto;
      box-shadow: 0px -8px 0 0px currentColor, 0px 8px 0 0px currentColor;
      background: #fff;
      color: #fff;
    }
  }
`;
