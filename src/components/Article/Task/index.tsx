import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import { getTaskActions, setTaskActions } from '../../../redux/taskActionsSlice';

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
  id: number;
  description: string;
  type: string;
  date: string;
  userImg: string;
  userName: string;
  Action: string;
}

const Task: React.FC<ITask> = ({
  id, description, type, date, userImg, userName, Action,
}) => {
  const actions = useSelector(getTaskActions);
  const dispatch = useDispatch();

  function changeTask(option: string) {
    const temp: string[] = [...actions];
    switch (option) {
      case 'secondary':
        temp[id] = 'Completed';
        break;
      case 'yellow':
        temp[id] = 'Active';
        break;
      case 'red':
        temp[id] = 'Ended';
        break;
      default:
        break;
    }

    dispatch(setTaskActions(temp));
  }

  let colors: string[];

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
            <ButtonStyle theme={colors[1]} onClick={() => changeTask(colors[1])} />
            <ButtonStyle theme={colors[2]} onClick={() => changeTask(colors[2])} />
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
