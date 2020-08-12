import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 20rem;
  margin-bottom: 2rem;
  background-color: var(--white);
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin-top: 1rem;
`;

const ChartsHeader = styled.div`
  width: 90%;
  margin: 0.4rem auto;
  padding-bottom: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray);

  h2 {
    font-weight: 500;
    font-size: 1.1rem;
  }

  label {
    color: var(--gray-text);
  }

  label select {
    border: none;
    margin-left: 0.4rem;
    background-color: var(--white);
    color: var(--primary);
  }
`;

export { Container, ChartsHeader };
