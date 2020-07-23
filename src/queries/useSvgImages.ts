import { graphql, useStaticQuery } from 'gatsby';

export const useSvgImages = (): any => {
  const {
    allFile: { nodes },
  } = useStaticQuery(graphql`
    query SvgImagesQuery {
      allFile(
        filter: { extension: { eq: "svg" }, relativePath: { regex: "/icons/" } }
      ) {
        nodes {
          id
          publicURL
          name
        }
      }
    }
  `);

  return nodes;
};
