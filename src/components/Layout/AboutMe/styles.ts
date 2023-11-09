import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  /* padding: 5rem 7rem; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  aside {
    width: 30%;
    img {
      height: auto;
      width: 100%;
    }
  }

  h3.complement-about-me {
    @media screen and (max-width: 720px) {
      font-size: 0.9rem;
    }
  }

  .container-slider {
    width: 200vw;
    overflow-x: scroll;

    .slider {
      gap: 1rem;
      display: flex;
    }
  }
`;

export const Title = styled.h3`
  color: #fff;
  margin: 0;
  position: relative;
  z-index: 1;
  font-weight: 300;
  font-size: 30px;
  display: inline-block;
  /* vertical-align: top; */
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

export const TextAboutMe = styled.h2`
  color: #fff;
  font-family: var(--font-rubik-700);
  font-size: 2rem;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const TextDetailAboutMe = styled.h3`
  color: #fff;
  font-size: 1.1rem;

  span {
    font-family: var(--font-rubik-500);
  }

  visibility: hidden;
  opacity: 0;
  transition: opacity 1s, visibility 1s;

  opacity: 1;
  visibility: visible;

  @media screen and (max-width: 720px) {
    font-size: 0.9rem;
  }
`;
