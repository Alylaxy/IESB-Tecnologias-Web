import React from 'react';
import { Login } from '../../components/Login/index-login';
import NavBar from '../../components/Nav-bar/index-navBar';
import * as S from './style-signin';

export const SignIn = () => {
  return (
    <S.Container>
        <NavBar />
        <Login />
    </S.Container>
  )
}