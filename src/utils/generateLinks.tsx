import React from 'react';
import { Link } from 'gatsby';

import { useNavbarlinks } from '../queries/useNavbarLinks';

export const generateLinks = () => {
  interface Link {
    path: string;
    name: string;
  }

  const links = useNavbarlinks();

  return React.Children.toArray(
    links.map(({ path, name }: Link) => <Link to={path}>{name}</Link>)
  );
};
