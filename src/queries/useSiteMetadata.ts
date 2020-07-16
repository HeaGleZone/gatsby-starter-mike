import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = (): any => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);

  return siteMetadata;
};
