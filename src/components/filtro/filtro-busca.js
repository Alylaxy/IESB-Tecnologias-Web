import { BoxButton, BoxPesquisa, Pesquisa, Container, Label, Input } from "./filtro-busca-style"
import { BsFilter, BsSearch } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

const Filtro = ()=>{
    return(
        <Container>
            <BoxButton>
                <Label>Filtro</Label>
                <BsFilter style={{alignSelf: "center"}} size={18} color={"white"}/>
            </BoxButton>  
            
            <BoxPesquisa>
                <Pesquisa>
                    <BsSearch style={{alignSelf: "center"}} size={18} color={"white"}/>
                </Pesquisa>
                <Input></Input>
            </BoxPesquisa>

        </Container>
    )
}

export default Filtro;