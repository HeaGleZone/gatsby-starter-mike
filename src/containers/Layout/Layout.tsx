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
}

const defaultProps: Props = {
  allowAsides: {
    left: false,
    right: false,
  },
};

const Layout: React.FC<Props> = ({
  children,
  allowAsides = defaultProps.allowAsides,
}) => (
  <>
    <GlobalStyle />
    <header>
      <Navbar />
    </header>
    <MainContainer allowAsides={allowAsides}>
      {allowAsides!.left && <aside></aside>}
      <main>{children}</main>
      {allowAsides!.right && <aside></aside>}
    </MainContainer>
  </>
);

export default Layout;
