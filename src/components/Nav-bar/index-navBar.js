import * as S from "./style-navBar"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "./logo/cinefilo-logo.png"

const NavBar = ()=>{
    const { signout, signed } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    return (
    <S.Container>
        {location.pathname === "/home" ?
            <S.Strong>
                <S.Img src={logo} />
            </S.Strong>
            :
            (<S.Strong>
                <Link onClick={navigate("/home")}>
                    <S.Img src={logo} />
                </Link>
            </S.Strong>)
        }
        {location.pathname !== ("/signin") && location.pathname !== ("/signup") ? (
            signed?
                (<S.Ul>
                    <S.Li><S.Span onClick={() => [signout(), navigate("/signin")]}>&nbsp;Sair</S.Span></S.Li>
                </S.Ul>):
                (<S.Ul>
                    <S.Li><S.Span onClick={() => navigate("/signin")}>&nbsp;Entrar</S.Span></S.Li>
                    <S.Li><S.Span onClick={() => navigate("/signup")}>&nbsp;Registrar</S.Span></S.Li>
                </S.Ul>))
            : null
        }
    </S.Container>)
}

export default NavBar