import React, { createContext, useState, useEffect, useContext } from 'react';

const API_URL = 'http://localhost:3001/tasks';
const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Buscar tarefas da API ao carregar
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  // Adicionar uma nova tarefa
  const addTask = async (text) => {
    if (!text.trim()) { // Validação simples
      alert("O nome da tarefa não pode ser vazio.");
      return;
    }
    const newTask = { text, completed: false };
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  // Deletar uma tarefa
  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  // Marcar como concluída/não concluída
  const toggleTask = async (id) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });
      const data = await response.json();
      setTasks(tasks.map((task) => (task.id === id ? data : task)));
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };
  
  const value = { tasks, loading, addTask, deleteTask, toggleTask };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};