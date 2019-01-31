export const drupalQuery = `query {
  nodeQuery(
    offset: 0
    limit: 10
    filter: {
      conditions: [
        { field: "type", value: ["article"], operator: EQUAL }
        { field: "status", value: ["1"], operator: EQUAL }
      ]
    }
  ) {
    count
    __typename
    entities {
      entityId
      entityUrl {
        path
        routed
      }
      entityBundle
      # ... on NodePage {
        # type {
          # targetId
        # }
        # body {
        #   value
        #   format
        # }
      # }
      ... on Node {
        title
        nid
      }
      ... on NodeArticle {
        reverseEntityIdComment {
          entities {
            ... on CommentComment {
              subject
              commentBody {
                value
              }
            }
          }
          count
        }
        fieldTags {
          targetId
        }
        fieldImage {
          url
          alt
        }
        title
        body {
          value
          format
        }
      }
    }
  }
}
`;
