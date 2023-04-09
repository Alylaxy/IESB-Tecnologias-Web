import React, { useState } from 'react';
import * as S from "./style-signin";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input/index-input";
import Button from "../../components/Button/index-button";

export const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if(res) {
      setError(res);
      return;
    }

    navigate("/home");
  }

  return (
    <S.Container>
      <S.Label>SISTEMA DE LOGIN</S.Label>
      <S.Content>
        <Input 
          type="email" 
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
          />

          <Input 
            type="password" 
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />

          <S.LabelError>{error}</S.LabelError>
          <Button Text="Entrar" onClick={handleLogin} />
          <S.LabelSignup>
            Não tem uma conta?
            <S.Strong>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </S.Strong>
          </S.LabelSignup>
      </S.Content>
    </S.Container>
  )
}