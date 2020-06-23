import React from 'react';

import { LayoutStyled } from './styles';

const Layout: React.FC = ({ children }) => (
  <LayoutStyled>{children}</LayoutStyled>
);

export default Layout;
