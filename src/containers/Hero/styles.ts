import styled from 'styled-components';

const HeroStyled = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 60px;

  background-image: ${props => props.theme.linearGradients.primary};

  & h1 {
    color: white;
  }

  & h2 {
    margin-top: 0;
    margin-bottom: 1.4em;
  }

  @media all and (max-width: 800px) {
    min-height: calc(100vh - 50px);
    margin-bottom: 40px;
  }
`;

export { HeroStyled };
