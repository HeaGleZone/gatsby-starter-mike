import React from 'react';

import '../../themes/index.css';
import GlobalStyle from '../../themes/global-style';
import { MainContainer } from './styles';

import { Navbar } from '../../components';

// TODO Add Width prop
interface Props {
  allowAsides?: {
    left?: boolean;
    right?: boolean;
  };
  width?: number;
}

const defaultProps: Props = {
  allowAsides: {
    left: false,
    right: false,
  },
  width: 60,
};

const Layout: React.FC<Props> = ({
  children,
  allowAsides = defaultProps.allowAsides,
  width = defaultProps.width,
}) => (
  <>
    <GlobalStyle />
    <header>
      <Navbar />
    </header>
    <MainContainer allowAsides={allowAsides} width={width || 0}>
      {allowAsides!.left && <aside></aside>}
      <main>{children}</main>
      {allowAsides!.right && <aside></aside>}
    </MainContainer>
  </>
);

export default Layout;
