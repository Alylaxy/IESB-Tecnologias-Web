import * as S from "./style-catalog";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Data from "./data"
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useEffect, useMemo } from "react";

const Catalogo = ({updateFilm, genre, search})=>{
    useEffect(() => {},[genre, search])

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

    return(
        <Carousel responsive={responsive}>
            {DataFiltrado.map((item, index) => (
                <S.Card key={index}>
                  <S.Favorite>
                    <S.Strong>
                      <Link>
                        <AiOutlineStar></AiOutlineStar>
                      </Link>
                    </S.Strong>
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