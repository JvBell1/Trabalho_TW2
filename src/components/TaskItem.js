import React from 'react';
import styled from 'styled-components';
import { useTasks } from '../context/TaskContext';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  }
`;

const TaskText = styled.span`
  flex-grow: 1;
  margin-left: 1rem;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#aaa' : '#333')};
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;
  color: white;
  margin-left: 0.5rem;
`;


const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask } = useTasks();

  return (
    <ItemContainer>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <TaskText completed={task.completed}>{task.text}</TaskText>
      <DeleteButton onClick={() => deleteTask(task.id)}>Excluir</DeleteButton>
    </ItemContainer>
  );
};

export default TaskItem;