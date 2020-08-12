import styled from 'styled-components';

const Container = styled.article`
  width: 54%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const TasksHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 1.1rem;
  }

  p span {
    color: var(--secondary);
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

const ProgressBar = styled.div`
  width: 90%;
  height: 6px;
  background: var(--gray);
  border-radius: 8rem;

  div {
    width: 80%;
    height: 6px;
    background: var(--secondary);
  }
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  h2 span {
    color: var(--gray-text)
  }
`;

const DaysList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  padding: 0;
  border-bottom: 1px solid var(--gray);
`;

const DaysListItem = styled.li`
  p:first-child {
    font-weight: 500;
    color: var(--gray-text);
  }

  p.active {
    background: var(--primary);
    border-radius: 50%;
    margin: 0;
    width: 26px;
    height: 26px;
    text-align: center;
    padding-top: 4px;
    margin-top: -4px;
  }

  &:hover {
    cursor: pointer;
    color: var(--primary);
    p:first-child {
      color: var(--primary);
    }
  }
`;

const Content = styled.div`
  width: 100%;
`;

const ShowMore = styled.a`
  margin: 1rem;
  color: var(--primary);
  font-size: 1.1rem;
  font-weight: 600;

  &:hover {
    color: var(--primary-hover);
    cursor: pointer;
  }
`;

export {
  Container,
  TasksHeader,
  ProgressBar,
  Schedule,
  DaysList,
  DaysListItem,
  Content,
  ShowMore,
};
