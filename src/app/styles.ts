import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

export const WrapperPage = styled.main`
  position: fixed;
  left: 250px;
  height: 100vh;
  width: calc(100vw - 250px);
  background-color: ${({ theme }) => theme.colors.blue_600};

  @media screen and (max-width: 1200px) {
    left: 0px;
    width: 100vw;
  }
`;

export const WrapperContent = styled.section`
  min-height: 100%;
  width: 100%;
  max-width: 1366px;
  padding: 5rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 1440px) {
    padding: 5rem 2rem;
  }

  @media screen and (max-width: 720px) {
    padding: 2rem 1rem;
  }

  h2 {
    margin: 0;
    font-family: var(--font-rubik-500);
  }

  h1 {
    font-weight: bold;
    margin: 0;
    font-size: 65px;
    font-family: var(--font-rubik-700);
    letter-spacing: 0.3rem;
  }

  input {
    color: #fff;
    background-color: transparent;
  }
`;
