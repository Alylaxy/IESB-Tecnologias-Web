import * as S from "./style-catalog";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Catalogo = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
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

    return(
        <Carousel responsive={responsive}>
            <S.Card/>
            <S.Card/>
            <S.Card/>
            <S.Card/>
            <S.Card/>
            <S.Card/>
            <S.Card/>
            <S.Card/>
        </Carousel>
    )
}

export default Catalogo;