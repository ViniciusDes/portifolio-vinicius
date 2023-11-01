import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 70vw;
`;

const slide = keyframes`
  0% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(-100%); /* Ajuste a porcentagem de acordo com a largura do slider */
  }
`;
export const SliderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  display: flex;
  gap: 20px 50px;
  animation: ${slide} 16s linear infinite;

  li {
    display: inline;
    /* margin-right: 20px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: max-content;
    gap: 5px;
  }

  img {
    width: 6rem;
    height: 6rem;
  }
`;
