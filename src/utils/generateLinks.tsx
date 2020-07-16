import React from 'react';
import { Link } from 'gatsby';

import { useNavbarlinks } from '../queries/useNavbarLinks';

export const generateLinks: React.FC = () => {
  interface Link {
    path: string;
    name: string;
    id: string;
  }

  const links = useNavbarlinks();

  return links.map(({ path, name, id }: Link) => (
    <Link key={id} to={path}>
      {name}
    </Link>
  ));
};
