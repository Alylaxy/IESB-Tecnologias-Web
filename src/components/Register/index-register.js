import React, { useState } from 'react';
import * as S from "./style-register";
import Input from "../Input/index-input";
import Button from '../Button/index-button';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

export const Register = () => {

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if(email !== emailConf){
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if(res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso");
    navigate("/");
  }

  return (
    <S.Container>
        <S.Label>Registro</S.Label>
        <S.ContainerInput>
          <S.Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
        </S.ContainerInput>
        <S.ContainerInput>
          <S.Input
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
          />
        </S.ContainerInput>
        <S.ContainerInput>
          <S.Input 
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
        </S.ContainerInput>
        <S.LabelError>{error}</S.LabelError>
        <S.Button Text="Inscrever-se" onClick={handleSignup} >
          <S.TextButton>Inscrever-se</S.TextButton>
        </S.Button>
        <S.LabelSignin>
          Já tem uma conta?
          <S.Strong>
            <Link to="/signin"> Entre</Link>
          </S.Strong>
        </S.LabelSignin>
    </S.Container>
  );
};