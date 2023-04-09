import * as S from "./style-navBar"
import { SiSinglestore } from 'react-icons/si';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button } from "../Filter/style-filter";

const NavBar = ()=>{
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
    <S.Container>
        <SiSinglestore size={32}/>
        <S.Ul>
            <S.Li><Button onClick={navigate("/signin")}>&nbsp;Entrar</Button></S.Li>
            <S.Li><Button onClick={navigate("/signup")}>&nbsp;Registrar</Button></S.Li>
            <S.Li><Button onClick={() => [signout(), navigate("/")]}>&nbsp;Sair</Button></S.Li>
        </S.Ul>
    </S.Container>)
}

export default NavBar