import TaskScheduleBtn from 'components/common/TaskScheduleBtn';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasksSelectors from 'redux/tasks/selector.tasks';

// import PropTypes from 'prop-types';

import s from './planningPage.module.scss';

const PlanningPage = () => {
  const tasks = useSelector(tasksSelectors.getTasks);
  console.log(tasks);
  return (
    <>
    <h1 className={s. title}>План на неделю:</h1>
    <div>
      {tasks?.map(({_id, title, reward, imageUrl}) => (
        <div key={_id} className={s.box}>
          <img src={imageUrl} alt={title} style={{ width: 280, height: 194 }} />
         <div className={s.box1}>
          <div>
          <p className={s.s}>{title}</p>
          <p className={s.reward}>{reward} балла</p>
          </div>
         <TaskScheduleBtn/>
         </div>
        </div>
      )
      
      )}
    </div>
    </>
  )
};

// PlanningPage.propTypes = {};

export default PlanningPage;
