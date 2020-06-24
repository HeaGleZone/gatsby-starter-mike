import styled from 'styled-components';

interface MainContainerProps {
  allowAsides?: {
    left?: boolean;
  };
  width: number;
}

const MainContainer = styled.div<MainContainerProps>`
  display: flex;
  flex-direction: row;

  margin-right: 0;
  margin-left: ${props =>
    props.allowAsides!.left ? 0 : `${(100 - props.width) / 2}vw`};

  & main {
    width: ${props => `${props.width}vw`};
  }

  & aside {
    width: ${props => `${(100 - props.width) / 2}vw`};
  }

  @media all and (max-width: 800px) {
    flex-direction: column;
    margin: 0;

    & main {
      order: 1;
    }

    & aside {
      order: 2;
    }

    & main,
    & aside {
      width: 100%;
      max-width: 100vw;
      min-height: auto;
    }
  }
`;

export { MainContainer };
