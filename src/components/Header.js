import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #007bff;
  padding: 1rem 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.2s;

  &.active {
    background-color: #0056b3;
  }

  &:hover {
    background-color: #0069d9;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Title>Lista de Tarefas</Title>
    <Nav>
      <StyledNavLink to="/" end>Ver Tarefas</StyledNavLink>
      <StyledNavLink to="/adicionar">Adicionar Tarefa</StyledNavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;