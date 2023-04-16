import * as S from "./style-navBar"
import { SiSinglestore } from 'react-icons/si';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button } from "../Filter/style-filter";
import { UseEffect } from "react";
import logo from "./logo/cinefilo-logo.png"

const NavBar = ()=>{
    const { signout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    return (
    <S.Container>
        {location.pathname === "/home" ?
            <S.Strong>
                <S.Img src={logo} />
            </S.Strong>
            :
            (
            <S.Strong>
                <Link onClick={navigate("/home")}>
                    <S.Img src={logo} />
                </Link>
            </S.Strong>)
        }
        {location.pathname !== ("/signin") && location.pathname !== ("/signup") ? (
            <S.Ul>
                <S.Li><Button onClick={() => navigate("/signin")}>&nbsp;Entrar</Button></S.Li>
                <S.Li><Button onClick={() => navigate("/signup")}>&nbsp;Registrar</Button></S.Li>
                <S.Li><Button onClick={() => [signout(), navigate("/signin")]}>&nbsp;Sair</Button></S.Li>
            </S.Ul>)
            : null
        }
        
    </S.Container>)
}

export default NavBar