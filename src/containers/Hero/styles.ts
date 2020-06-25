import styled from 'styled-components';

const HeroStyled = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  /* clip-path: ellipse(180% 100% at 50% 0%); */
  display: flex;
  justify-content: center;
  align-items: center;

  background: #00f260; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0575e6,
    #00f260
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0575e6,
    #00f260
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /* &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  } */

  & > * {
    position: relative;
    z-index: 1;
  }

  & h1 {
    /* opacity: 1; */
    color: blue;
  }

  @media all and (max-width: 800px) {
    height: calc(100vh - 50px);
  }
`;

export { HeroStyled };
