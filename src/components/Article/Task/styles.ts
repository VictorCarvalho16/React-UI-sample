import styled from 'styled-components';

interface Props {
  theme: string;
}

const Container = styled.div`
  width: 90%;
  margin: 1rem auto;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  &:hover {
    ul {
      display: flex;
    }
  }
`;

const TaskHeader = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;

const TaskDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const TaskType = styled.p`
  color: var(--gray-text);
  line-height: 1.8rem;
  font-weight: 500;
`;

const TaskDate = styled.p`
  width: 90%;
  color: var(--gray-text);
`;

const TaskFooter = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImg = styled.img`
  width: 32px;
  height: 32px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 1rem;
`;

const UserName = styled.p`
  font-weight: 500;
    color: var(--gray-text);
`;

const TaskButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 52px;
`;

const Buttons = styled.ul`
  list-style: none;
  display: none;
  padding: 0;
`;

const ButtonStyle = styled.button<Props>`
  background-color: transparent;
  border: 4px solid ${(p) => `var(--${p.theme})`};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 2px;

  &:hover {
    border-color: ${(p) => `var(--${p.theme}-hover)`};
    cursor: pointer;
  }
`;

const ButtonControl = styled.button`
  background-color: transparent;
  border: none;
  width: 20px;
  height: 20px;
  color: var(--gray);
  font-size: 1.08rem;
  margin: 0 2px;

  &:hover {
    color: var(--gray-text);
    cursor: pointer;
  }
`;

const ActionButton = styled.button`
  background-color: ${(p) => `var(--${p.theme})`};;
  border: none;
  border-radius: 4px;
  color: var(--white);
  height: 28px;
  width: 98px;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 1rem;

  &:hover {
    background-color: ${(p) => `var(--${p.theme}-hover)`};
    cursor: pointer;
  }
`;

export {
  Container,
  TaskHeader,
  TaskDescription,
  TaskType,
  TaskDate,
  TaskFooter,
  UserCard,
  UserImg,
  UserName,
  TaskButtons,
  Buttons,
  ButtonStyle,
  ButtonControl,
  ActionButton,
};
