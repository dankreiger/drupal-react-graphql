import styled from 'styled-components';

export const ArticleListContainer = styled.div`
  display: grid;
  grid-gap: 20px;

  img {
    width: 100%;
    max-height: 100px;
    object-fit: cover;
  }
  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
