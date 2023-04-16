import React, { useState } from 'react';
import * as S from "./style-signup";
import NavBar from '../../components/Nav-bar/index-navBar';
import { Register } from '../../components/Register/index-register';

export const SignUp = () => {

  return (
    <S.Container>
        <NavBar />
        <Register />
    </S.Container>
  )
}