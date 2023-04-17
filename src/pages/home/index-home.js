import React, { useEffect, useState } from 'react'

import Filtro from '../../components/Filter/index-filter';
import NavBar from '../../components/Nav-bar/index-navBar';
import Catalogo from '../../components/Catalog/index-catalog';
import Selected from '../../components/Selected/index-selected';
import * as S from './style-home';

export const Home = () => {
    const [selectedFilm, setSelectedFilm] = useState({
      title: "Adam Driver 65",
      imagemUrl: "/static/media/65.85ad3eadcb196d562877.jpg",
      description: "65 é a história de um cruzador espacial 'futurista' que cai em um planeta distante e apenas o capitão e uma " 
      +"jovem sobrevivem. À medida que os dois viajantes espaciais se orientam pelo terreno estrangeiro, é revelado que o planeta é na verdade "
      +"a Terra há 65 milhões de anos - e cheio de dinossauros pré-históricos que ameaçam sua sobrevivência. As coisas ficam ainda mais complicadas " 
      +"quando eles descobrem que um grande asteróide, O asteróide, está em rota de colisão direta com a Terra e a dupla deve desesperadamente "
      +"alcançar sua nave de fuga enquanto a extinção do mundo se aproxima rapidamente."
    });

    const [filter, setFilter] = useState({
      genre: "",
      search: ""
    });

    const updateFilm = (title, image, description) => {
      const object = {
        title: title, 
        imagemUrl: image, 
        description: description
      }
      setSelectedFilm(object);
    }

    const updateCatalog = (genre, search) => {
      const object = {
        genre: genre, 
        search: search
      }
      setFilter(object);
    }

    return (
      <S.All>
        <S.Container>
          <NavBar />
          <S.ContainerContent>
            <Filtro updateCatalog={updateCatalog} />
            <Selected title={selectedFilm.title} imageUrl={selectedFilm.imagemUrl} description={selectedFilm.description} />
            <Catalogo updateFilm={updateFilm} genre={filter.genre} search={filter.search}/>
          </S.ContainerContent>
        </S.Container>
      </S.All>
    )
}