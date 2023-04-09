import React from 'react'

import Filtro from '../../components/Filter/index-filter';
import NavBar from '../../components/Nav-bar/index-navBar';
import Catalogo from '../../components/Catalog/index-catalog';
import Destaque from '../../components/Selected/index-selected';
import * as S from './style-home';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <S.Container>
      <NavBar />
      <Filtro />
      <Destaque />
      <Catalogo />
    </S.Container>
  )
}