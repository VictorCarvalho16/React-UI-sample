import styled from 'styled-components';

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-top);
  border-bottom: 1px solid var(--gray);
  max-height: 69px;

  @media (max-width: 700px) {
    justify-content: flex-end;
  }
  
`;

const SearchBox = styled.div`
  display: flex;
  margin: 1rem 2rem;
  align-items: center;
  padding: 0.2rem;
  padding: 0.07rem;

  @media (max-width: 700px) {
    display: none;
  }

  input {
    border: none;
    font-size: 1.3rem;
    padding: 0.3rem;
    background-color: var(--background-top);
  }

  @media (max-width: 700px) {
    input {
      display: none;
    }
  }
`;

const SearchButton = styled.div`
  margin-right: 0.5rem;
  padding-bottom: 0.3rem;

  button {
    border: none;
    background-color: var(--background-top);
    font-size: 1.3rem;
    color: var(--gray);
  }
`;

const Notification = styled.div`
  font-size: 1.6rem;
  margin: 1rem;
  color: var(--gray);

  &:hover {
    color: var(--gray-text);
  }
  
  span {
    width: 10px;
    height: 10px;
    right: -15px;
    top: -33px;
    border-radius: 50%;
    display: block;
    position: relative;
    background-color: var(--red);
  }
`;

export {
  Bar, SearchBox, SearchButton, Notification,
};
