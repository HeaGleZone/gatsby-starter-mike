import { graphql, useStaticQuery } from 'gatsby';

export const useOpeningHours = () => {
  const {
    allOpeningHoursJson: { nodes },
  } = useStaticQuery(graphql`
    query OpeningHoursQuery {
      allOpeningHoursJson {
        nodes {
          day
          hours
        }
      }
    }
  `);

  return nodes;
};
