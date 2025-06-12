import React from 'react';
import styled from 'styled-components';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

const ListContainer = styled.div`
  padding: 1rem 0;
`;

const Message = styled.p`
  text-align: center;
  color: #666;
  margin-top: 2rem;
`;

const TaskList = () => {
  const { tasks, loading } = useTasks();

  if (loading) return <Message>Carregando tarefas...</Message>;
  if (tasks.length === 0) return <Message>Nenhuma tarefa cadastrada.</Message>;

  return (
    <ListContainer>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ListContainer>
  );
};

export default TaskList;