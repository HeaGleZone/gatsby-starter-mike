import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = (): {
  author: string;
  description: string;
  title: string;
} => {
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
