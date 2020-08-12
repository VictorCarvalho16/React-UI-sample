import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

import {
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
} from './styles';

interface ITask {
  description: string;
  type: string;
  date: string;
  userImg: string;
  userName: string;
  Action: string;
}

const Task: React.FC<ITask> = ({
  description, type, date, userImg, userName, Action,
}) => {
  let colors = [];

  switch (Action) {
    case 'Completed':
      colors = ['secondary', 'yellow', 'red'];
      break;
    case 'Ended':
      colors = ['red', 'secondary', 'yellow'];
      break;

    case 'Active':
      colors = ['yellow', 'secondary', 'red'];
      break;

    default:
      colors = ['secondary', 'yellow', 'red'];
  }

  return (
    <Container>
      <TaskHeader>
        <TaskDescription>{description}</TaskDescription>
        <TaskType>{type}</TaskType>
      </TaskHeader>
      <TaskDate>
        Due Date:
        {' '}
        <strong>{date}</strong>
      </TaskDate>
      <TaskFooter>
        <UserCard>
          <UserImg src={userImg} alt={userName} />
          <UserName>{userName}</UserName>
        </UserCard>

        <TaskButtons>
          <Buttons>
            <ButtonStyle theme={colors[1]} />
            <ButtonStyle theme={colors[2]} />
            <ButtonControl>
              <FaPen />
            </ButtonControl>
            <ButtonControl>
              <FaTrash />
            </ButtonControl>
          </Buttons>
          <ActionButton theme={colors[0]}>
            {Action}
          </ActionButton>
        </TaskButtons>
      </TaskFooter>
    </Container>
  );
};

export default Task;
