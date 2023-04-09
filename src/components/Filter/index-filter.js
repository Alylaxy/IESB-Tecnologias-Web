import { useState } from "react";
import * as S from "./style-filter"
import { BsSearch } from 'react-icons/bs';

const Filter = ()=>{
    const [showOptions, setShowOptions] = useState(false);
    const filtro = "Tudo";

    const handleButtonFilter = () => {
        setShowOptions(!showOptions);
    };

    return(
        <S.Container>
            <S.BoxButton>
                <S.Button onClick={handleButtonFilter}>{filtro}</S.Button>
            </S.BoxButton>
            <S.BoxSearch>
                <BsSearch style={{alignSelf: "center"}} size={18} color={"black"}/>
                <S.Input placeholder="Pesquisar"></S.Input>
            </S.BoxSearch>
        </S.Container>
    )
}

export default Filter;