import React, { useEffect, useState } from 'react'

import Filtro from '../../components/Filter/index-filter';
import NavBar from '../../components/Nav-bar/index-navBar';
import Catalogo from '../../components/Catalog/index-catalog';
import Selected from '../../components/Selected/index-selected';
import * as S from './style-home';

export const Home = () => {
    const [selectedFilm, setSelectedFilm] = useState({
      title: "65",
      imagemUrl: "/static/media/65.85ad3eadcb196d562877.jpg",
      description: ""
    });

    const updateFilm = (title, image, description) => {
      const object = {
        title: title, 
        imagemUrl: image, 
        description: description
      }
      console.log(image);
      setSelectedFilm(object);
    }

    return (
      <S.All>
        <S.Container>
          <NavBar />
          <Filtro />
          <Selected title={selectedFilm.title} imageUrl={selectedFilm.imagemUrl} description={selectedFilm.description} />
          <Catalogo setSelectedFilm={setSelectedFilm} updateFilm={updateFilm}/>
        </S.Container>
      </S.All>
    )
}