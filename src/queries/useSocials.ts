import { graphql, useStaticQuery } from 'gatsby';

export const useSocials = (): any => {
  const {
    allSocialsJson: { nodes },
  } = useStaticQuery(graphql`
    query SocialsQuery {
      allSocialsJson {
        nodes {
          id
          link
          image
        }
      }
    }
  `);

  return nodes;
};
