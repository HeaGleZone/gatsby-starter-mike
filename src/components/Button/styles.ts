import styled from 'styled-components';

const ButtonStyled = styled.button`
  position: relative;
  padding: 0.5em 2em;
  background: white;
  border-radius: 100px;
  outline: none;
  border: none;
  /* border-width: 2px;
  border-style: solid;
  border-color: black; */
  margin: 10px;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.6);

  & p {
    position: relative;
    margin: 0;
    color: black;
    font-size: 24px;
  }

  &::before {
    content: '';
    border-radius: 100px;
    position: absolute;
    display: block;
    background: rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    transition: clip-path 0.4s ease;
    clip-path: circle(0%);
  }

  &:hover {
    &::before {
      clip-path: circle(100%);
    }
  }
`;

export { ButtonStyled };
