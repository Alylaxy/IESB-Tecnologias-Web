import { Container, Li, Ul } from "./nav-bar-style"
import { SiSinglestore } from 'react-icons/si';

const NavBar = ()=>{
    return (
    <Container>
        <SiSinglestore size={32}/>
        <Ul>
            <Li>Entrar</Li>
            <Li>Registrar</Li>
        </Ul>
    </Container>)
}

export default NavBar