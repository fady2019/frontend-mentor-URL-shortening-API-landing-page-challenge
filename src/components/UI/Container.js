import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 501px) and (max-width: 768px) {
    & {
      max-width: 500px;
    }
  }
`;

export default Container;
