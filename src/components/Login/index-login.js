import React, { useState } from 'react';
import * as S from "./style-login";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';


export const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if(!email || !senha) {
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
        <S.Label>Entrar</S.Label>
        <S.ContainerInput>
          <AiOutlineUser color="white" />
          <S.Input
            type="email" 
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
        </S.ContainerInput>
        <S.ContainerInput>
          <RiLockPasswordLine color="white" />
          <S.Input 
            type="password" 
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
        </S.ContainerInput>

        <S.LabelError>{error}</S.LabelError>
        <S.Button onClick={handleLogin} >
          <S.TextButton>Entrar</S.TextButton>
        </S.Button>
        <S.LabelSignup>
          Não tem uma conta?
          <S.Strong>
            <Link to="/signup">&nbsp; Registre-se</Link>
          </S.Strong>
        </S.LabelSignup>
      </S.Container>
  )
}
