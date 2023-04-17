import React from 'react';
import { Register } from '../../components/Register/index-register';
import NavBar from '../../components/Nav-bar/index-navBar';
import * as S from "./style-signup";

export const SignUp = () => {
  return (
    <S.Container>
        <NavBar />
        <Register />
    </S.Container>
  )
}