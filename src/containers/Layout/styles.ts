import styled from 'styled-components';

interface MainContainerProps {
  mainFlex: number;
  allowAsides?: {
    left?: boolean;
    right?: boolean;
  };
}

const MainContainer = styled.div<MainContainerProps>`
  display: flex;
  flex-direction: row;

  margin-right: 0;

  & main {
    border-radius: 20px;
    flex: ${props => props.mainFlex};
  }

  & aside {
    flex: 1;
  }

  & aside:nth-child(1) {
    opacity: ${props => (props.allowAsides!.left ? 1 : 0)};
  }

  & aside:nth-child(3) {
    opacity: ${props => (props.allowAsides!.right ? 1 : 0)};
  }

  @media all and (max-width: 800px) {
    flex-direction: column;
    margin: 0;

    & main {
      border-radius: 0px;
      order: 1;
    }

    & aside {
      order: 2;
    }

    & main,
    & aside {
      width: calc(100% - 20px);
      max-width: 100%;
      min-height: auto;
    }
  }
`;

export { MainContainer };
