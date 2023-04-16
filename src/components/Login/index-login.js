import React, { useState } from 'react';
import * as S from "./style-login";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "../Input/index-input";
import Button from "../Button/index-button";

export const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    console.log(!email + ":" + !senha);

    if(!email || !senha) {
      console.log("entrou no if");
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if(res) {
      setError(res);
      return;
    }

    navigate("/");
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