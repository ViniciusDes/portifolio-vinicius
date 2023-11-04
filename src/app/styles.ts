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
  height: 100%;
  width: 100%;
  padding: 5rem 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  h2 {
    margin: 0;
    font-family: var(--font-rubik-500);
  }
  h1,
  h2,
  h3 {
    /* margin: 0; */
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
