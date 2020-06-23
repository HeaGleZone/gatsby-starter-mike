import React from 'react';

import GlobalStyle from '../../themes/global-style';
import { MainContainer } from './styles';

interface Props {
  asides?: {
    left?: boolean;
    right?: boolean;
  };
}

const defaultProps: Props = {
  asides: {
    left: false,
    right: true,
  },
};

const Layout: React.FC<Props> = ({
  children,
  asides = defaultProps.asides,
}) => (
  <>
    <GlobalStyle />
    <header></header>
    <MainContainer asides={asides}>
      {asides!.left && <aside></aside>}
      <main>{children}</main>
      {asides!.right && <aside></aside>}
    </MainContainer>
  </>
);

export default Layout;
