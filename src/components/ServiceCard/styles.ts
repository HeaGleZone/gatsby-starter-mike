import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

interface ImageProps {
  image: string;
}

const ArrowAnim = keyframes`
  0% {
    transform: translateX(-100px);
  }

  100% {
    transform: translateX(100px);
  }
`;

const ServiceCardStyled = styled.div`
  position: relative;
  width: 300px;
  background: white;
  margin: 40px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.6);
  padding-bottom: 148px;
  border-radius: 24px 24px 0 0;

  &::before {
    content: '';
    display: block;
    position: absolute;
    clip-path: polygon(0 0, 101% 0, 101% 100%, 0 60%);
    width: 100%;
    height: 190px;
    background-image: ${props => props.theme.linearGradients.primary};
    z-index: 0;
    border-radius: 20px 20px 0 0;
  }

  @media all and (max-width: 800px) {
    margin: 30px;
    width: calc(100vw - 60px);
  }
`;

const Image = styled.div<ImageProps>`
  position: relative;
  width: 150px;
  height: 150px;
  background: white;
  border-radius: 100%;
  margin: 40px 75px;
  z-index: 1;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media all and (max-width: 800px) {
    margin: 40px calc((100vw - 60px - 150px) / 2);
  }
`;

const Name = styled.span`
  display: block;
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin: 40px 10%;
  text-align: center;
  width: 80%;
  text-align: center;
`;

const Arrow = styled.div`
  position: relative;
  width: 30px;
  height: 4px;
  background: white;
  opacity: 1;
  transition: opacity 0.2s ease;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    background: white;
    width: 14px;
    height: 4px;
    right: -4px;

    transform: translateX(100px);
  }

  &::after {
    top: -4px;
    transform: rotate(48deg);
  }

  &::before {
    top: 4px;
    transform: rotate(-48deg);
  }
`;

const Button = styled(Link)`
  position: absolute;
  width: 50%;
  height: 40px;
  background: ${props => props.theme.backgrounds.primary};
  border: none;
  outline: none;
  border-radius: 100px;
  margin: 0px 25%;
  bottom: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: clip-path 0.2s ease;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 0%,
    100% 100%,
    0% 100%,
    0% 100%,
    0% 100%
  );

  &:hover {
    clip-path: polygon(
      0% 20%,
      60% 20%,
      60% 0%,
      100% 50%,
      60% 100%,
      60% 80%,
      0% 80%
    );

    & > ${Arrow} {
      opacity: 0;
    }
  }
`;

const InfoBar = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 40px;
  background: ${props => props.theme.backgrounds.secondary};
  display: flex;
  justify-content: space-between;
  bottom: 0;
  left: 0;

  & p {
    margin: 0;
  }
`;

export { ServiceCardStyled, Image, Name, InfoBar, Button, Arrow };
