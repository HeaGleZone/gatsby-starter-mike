import styled from 'styled-components';

interface MainContainerProps {
  asides?: {
    left?: boolean;
    right?: boolean;
  };
}

const MainContainer = styled.div<MainContainerProps>`
  display: flex;
  flex-direction: row;

  margin-right: ${props => (props.asides!.right ? 0 : '0%')};
  margin-left: ${props => (props.asides!.left ? 0 : '20vw')};

  & main {
    width: 60vw;
  }

  & aside {
    width: 20vw;
  }

  @media all and (max-width: 800px) {
    flex-direction: column;

    & main {
      order: 1;
    }

    & aside {
      order: 2;
    }

    & main,
    & aside {
      width: 100%;
    }
  }
`;

export { MainContainer };
