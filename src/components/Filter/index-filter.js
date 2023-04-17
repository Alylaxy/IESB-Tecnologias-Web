import * as S from "./style-filter"
import { BsSearch, BsFilterSquare } from 'react-icons/bs';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Data from "./data";

const Filter = ({updateCatalog})=>{
    const [open, setOpen] = useState(false);
    const [busca, setBusca] = useState("");

    function handleKeyPress(event) {
        if(event.key === 'Enter'){
            updateCatalog("", event.target.value);
        }
    }

    return(
        <S.Container>
            <S.ContainerPesquisa>
                <S.iconButton href="#" onClick={() => setOpen(!open)}>
                    <BsFilterSquare />
                </S.iconButton>
                <S.BoxSearch>
                    <BsSearch style={{alignSelf: "center"}} size={18} color={"rgba(52, 60, 82, 0.8)"}/>
                    <S.Input type="text" placeholder="Pesquisar" onKeyPress={handleKeyPress} />
                </S.BoxSearch>
            </S.ContainerPesquisa>
            {open?GenreLinks(): null}
        </S.Container>
    )

    function GenreLink(props){
        return (
            <S.Strong>
                <S.Categorie onClick={() => updateCatalog((props.genre==="Tudo"?"":props.genre) , "")}>
                    {props.genre}
                </S.Categorie>
            </S.Strong>
        
        )
    }

    function GenreLinks(){
        return(
            <S.Filtros>
                {Data.map((item) => (
                    <GenreLink key={item.genre} genre={item.genre} />
                ))}
            </S.Filtros>
        )
    }
}

export default Filter;