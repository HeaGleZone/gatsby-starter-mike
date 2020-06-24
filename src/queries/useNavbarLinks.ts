import { graphql, useStaticQuery } from 'gatsby';

export const useNavbarlinks = () => {
  const {
    allNavbarLinksJson: { nodes },
  } = useStaticQuery(graphql`
    query NavbarLinks {
      allNavbarLinksJson {
        nodes {
          name
          path
        }
      }
    }
  `);

  return nodes;
};
