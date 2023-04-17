import * as S from "./style-catalog";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Data from "./data"
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Catalogo = ({updateFilm, genre, search})=>{
    const favoritesStorage = JSON.parse(localStorage.getItem('favorites_db'));
    const [favorites, setFavorites] = useState(favoritesStorage || {});

    useEffect(() => {},[genre, search]);
    useEffect(() => {
        localStorage.setItem('favorites_db', JSON.stringify(favorites));
    },[favorites]);

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const DataFiltrado = useMemo(() => {
      const lowerSearch = search.toLowerCase();
      if(genre === ""){
        return Data.filter((item) =>
          item.title.toLowerCase().includes(lowerSearch)
        );
      }else{
        return Data.filter((item) =>
          item.genre.includes(genre)
        );
      }
    }, [search, genre])

    const favoriteItem = (props) => {
      const userToken = JSON.parse(localStorage.getItem("user_token"));

      if(userToken){
        const email = userToken.email;
        const film = props.id;
    
        setFavorites((prevFavorites) => {
          console.log(prevFavorites);
          const userFavorites = prevFavorites[email] || [];
  
          const hasFavorite = userFavorites.includes(film);
          
          if (hasFavorite) {
            const newFavorites = userFavorites.filter((id) => id !== film);
            return { ...prevFavorites, [email]: newFavorites };
          } else {
            const newFavorites = [...userFavorites, film];
            return { ...prevFavorites, [email]: newFavorites };
          }
        });
      }
    };
    

    const isFavorite = (props) => {
      const userToken = JSON.parse(localStorage.getItem("user_token"));

      if(userToken){
        const email = userToken.email;
        const film = props.id;
  
        const userFavorites = favorites[email] || [];
        const hasFavorite = userFavorites.includes(film);
        
        return hasFavorite;
      }else{
        return false;
      }
    }

    return(
        <Carousel responsive={responsive}>
            {DataFiltrado.map((item, index) => (
                <S.Card key={index}>
                  <S.Favorite>
                    {isFavorite(item)?
                      (<S.Strong>
                        <Link onClick={() => favoriteItem(item)}>
                          <AiFillStar color="#FFDF00" />
                        </Link>
                      </S.Strong>):
                      (<S.Strong>
                        <Link onClick={() => favoriteItem(item)}>
                          <AiOutlineStar color="#FFDF00" />
                        </Link>
                      </S.Strong>)
                    }
                    
                  </S.Favorite>
                  <Link onClick={() => updateFilm(item.title, item.imageUrl, item.description)}>
                    <S.Img width="210" height="340" key={index} src={item.imageUrl} alt={item.title}></S.Img>
                  </Link>
                </S.Card>
              )
            )}
        </Carousel>
    )
}

export default Catalogo;