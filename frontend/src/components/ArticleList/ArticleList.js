import React from 'react';
import { Query } from 'react-apollo';

import { ArticleListContainer } from './ArticleList.styles';
import { drupalQuery } from './query';
import gql from 'graphql-tag';

// remove inner html from drupal body
function createMarkup(__html) {
  return { __html };
}

const ArticleList = () => (
  <ArticleListContainer>
    <Query
      query={gql`
        ${drupalQuery}
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        console.log(data);
        return (
          data.nodeQuery.entities &&
          data.nodeQuery.entities.map(
            ({ entityId, title, body, fieldImage }) => (
              <div key={entityId}>
                {fieldImage && (
                  <img src={fieldImage.url} alt={fieldImage.alt} />
                )}
                <h3>{title}</h3>
                {body && (
                  <p dangerouslySetInnerHTML={createMarkup(body.value)} />
                )}
              </div>
            )
          )
        );
      }}
    </Query>
  </ArticleListContainer>
);

export default ArticleList;
