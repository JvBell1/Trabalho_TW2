import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTasks } from '../context/TaskContext';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #218838;
  }
`;

const AddTaskPage = () => {
  const [text, setText] = useState('');
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // A validação principal já está na função addTask do contexto
    addTask(text);
    setText('');
    navigate('/'); // Navega de volta para a home após adicionar
  };

  return (
    <div>
      <h2>Adicionar Nova Tarefa</h2>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="O que precisa ser feito?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required // Validação nativa do HTML
        />
        <SubmitButton type="submit">Adicionar</SubmitButton>
      </FormContainer>
    </div>
  );
};

export default AddTaskPage;