import { graphql, useStaticQuery } from 'gatsby';

export const useNavbarlinks = (): any => {
  const {
    allNavbarLinksJson: { nodes },
  } = useStaticQuery(graphql`
    query NavbarLinksQuery {
      allNavbarLinksJson {
        nodes {
          id
          name
          path
        }
      }
    }
  `);

  return nodes;
};
