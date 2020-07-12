import styled from 'styled-components';

interface SocialStyledProps {
  image: string;
}

const SocialStyled = styled.a<SocialStyledProps>`
  display: block;
  position: relative;
  width: 160px;
  height: 160px;
  margin: 40px;
  border-radius: 100%;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
  transform-style: preserve-3d;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }

  &::before {
    background: ${props => props.theme.backgrounds.secondary};
    transform: translate3d(0, 0, -1px);
  }

  &::after {
    background: ${props => props.theme.paragraph.secondary};
    opacity: 0.1;
    transition: transform 0.2s ease;
    transform: translate3d(-6%, 6%, -2px);
  }

  &:hover {
    &::after {
      transform: translate3d(0, 0, -2px);
    }
  }

  @media all and (max-width: 800px) {
    width: 100px;
    height: 100px;
    margin: 30px;
  }
`;

const SocialSmallStyled = styled.a<SocialStyledProps>`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin: 40px;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media all and (max-width: 800px) {
    margin: 15px;
  }
`;

export { SocialStyled, SocialSmallStyled };
