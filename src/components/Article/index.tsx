import React from 'react';
import { useSelector } from 'react-redux';

import Task from './Task';
import { getTaskActions } from '../../redux/taskActionsSlice';

import {
  Container,
  TasksHeader,
  ProgressBar,
  Schedule,
  DaysList,
  DaysListItem,
  Content,
  ShowMore,
} from './styles';

function Article() {
  const actions = useSelector(getTaskActions);

  return (
    <Container>
      <TasksHeader>
        <p>
          8 task
          {' '}
          <span>completed</span>
          {' '}
          out of 10
        </p>
        <label>
          Show:
          <select name="select">
            <option value="day">This Day</option>
            <option value="week" selected>This Week</option>
            <option value="month">This Month</option>
          </select>
        </label>
      </TasksHeader>

      <ProgressBar>
        <div />
      </ProgressBar>

      <Schedule>
        <h2>
          23 December,
          {' '}
          <span>Sunday</span>
        </h2>

        <DaysList>
          <DaysListItem>
            <p>Sun</p>
            <p className="active">23</p>
          </DaysListItem>
          <DaysListItem>
            <p>Mon</p>
            <p>24</p>
          </DaysListItem>
          <DaysListItem>
            <p>Tue</p>
            <p>25</p>
          </DaysListItem>
          <DaysListItem>
            <p>Wed</p>
            <p>26</p>
          </DaysListItem>
          <DaysListItem>
            <p>Thu</p>
            <p>27</p>
          </DaysListItem>
          <DaysListItem>
            <p>Fri</p>
            <p>28</p>
          </DaysListItem>
          <DaysListItem>
            <p>Sat</p>
            <p>29</p>
          </DaysListItem>
        </DaysList>
      </Schedule>

      <Content>
        <Task
          id={0}
          description="Send benefit review by Sunday"
          type="Reminder"
          date="December 23, 2018"
          userImg="https://media.istockphoto.com/photos/african-mature-man-with-spectacles-picture-id1152603187"
          userName="George Fields"
          Action={actions[0]}
        />
        <Task
          id={1}
          description="Invite to office meet-up"
          type="Call"
          date="December 23, 2018"
          userImg="https://media.istockphoto.com/photos/portrait-of-afro-girl-in-eyeglasses-picture-id995745018"
          userName="Rebecca Moore"
          Action={actions[1]}
        />
        <Task
          id={2}
          description="Office meet-up"
          type="Event"
          date="December 23, 2018"
          userImg="https://media.istockphoto.com/photos/beautiful-babe-in-specs-picture-id1089633766"
          userName="Lindsey Stroud"
          Action={actions[2]}
        />
      </Content>
      <ShowMore>Show More</ShowMore>
    </Container>
  );
}

export default Article;
