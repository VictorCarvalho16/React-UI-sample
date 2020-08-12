import styled from 'styled-components';

const Container = styled.aside`
  width: 36%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    width: 90%;
    margin-top: 1rem;
  }
`;

export default Container;
