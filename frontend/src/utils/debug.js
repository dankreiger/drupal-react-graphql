import gql from 'graphql-tag';
import { drupalQuery } from '../components/ArticleList/query';

export const debugDrupal = client => {
  client
    .query({
      query: gql`
        ${drupalQuery}
      `
    })
    .then(({ data }) => console.log({ data }));
};
