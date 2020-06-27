import { graphql, useStaticQuery } from 'gatsby';

export const useNavbarlinks = () => {
  const {
    allNavbarLinksJson: { nodes },
  } = useStaticQuery(graphql`
    query NavbarLinksQuery {
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
