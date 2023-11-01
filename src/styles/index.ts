import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ whiteColor?: boolean }>`
 
  body {
    /* color: ${(props) => (props.whiteColor ? "white" : "black")}; */
    font-family: ${(props) => props.theme.fontFamily};
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
  
  }

  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    text-size-adjust: 100%;
    border: none;
  }

  input {
    border: none;
  }

  button {
    cursor: pointer
  }
`;

interface RowProps {
  jContent?: string;
  algItems?: string;
  algISelf?: string;
  pd?: string;
  mg?: string;
  gap?: string;
  flWrap?: boolean;
  wd?: string;
  fl?: string | number;
}
export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${({ flWrap }) => (flWrap ? "wrap" : "nowrap")};
  justify-content: ${({ jContent }) => jContent ?? "start"};
  align-items: ${({ algItems }) => algItems ?? "start"};
  align-self: ${({ algISelf }) => algISelf ?? "unset"};
  padding: ${({ pd }) => pd ?? "0"};
  margin: ${({ mg }) => mg ?? "0"};
  gap: ${({ gap }) => gap ?? "0"};
  width: ${({ wd }) => wd && wd};
  flex: ${({ wd, fl }) => (!wd && !fl ? 1 : fl)};
`;

interface ColProps {
  jContent?: string;
  algItems?: string;
  algISelf?: string;
  pd?: string;
  mg?: string;
  hgt?: string;
  gap?: string;
  wd?: string;
  minWd?: string;
  fl?: string | number;
}
export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ jContent }) => jContent ?? "start"};
  align-items: ${({ algItems }) => algItems ?? "start"};
  align-self: ${({ algISelf }) => algISelf ?? "unset"};
  padding: ${({ pd }) => pd ?? "0"};
  margin: ${({ mg }) => mg ?? "0"};
  gap: ${({ gap }) => gap ?? "0"};
  min-width: ${({ minWd }) => minWd ?? "0"};
  width: ${({ wd }) => wd && wd};
  height: ${({ hgt }) => hgt && hgt};
  flex: ${({ wd, fl }) => (!wd && !fl ? 1 : fl)};
`;
