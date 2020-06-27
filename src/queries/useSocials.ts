import { graphql, useStaticQuery } from 'gatsby';

export const useSocials = () => {
  const {
    allSocialsJson: { nodes },
  } = useStaticQuery(graphql`
    query SocialsQuery {
      allSocialsJson {
        nodes {
          link
          image
        }
      }
    }
  `);

  return nodes;
};
