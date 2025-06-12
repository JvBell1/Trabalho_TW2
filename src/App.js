import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    margin: 1rem auto;
    padding: 0 1rem;
  }
`;

function App() {
  return (
    <TaskProvider>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adicionar" element={<AddTaskPage />} />
          </Routes>
        </Container>
      </Router>
    </TaskProvider>
  );
}

export default App;