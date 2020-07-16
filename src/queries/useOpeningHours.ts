import { graphql, useStaticQuery } from 'gatsby';

export const useOpeningHours = (): any => {
  const {
    allOpeningHoursJson: { nodes },
  } = useStaticQuery(graphql`
    query OpeningHoursQuery {
      allOpeningHoursJson {
        nodes {
          id
          day
          hours
        }
      }
    }
  `);

  return nodes;
};
