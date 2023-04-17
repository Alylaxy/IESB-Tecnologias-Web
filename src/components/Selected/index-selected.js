import * as S from "./style-selected"
import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useEffect } from "react";

const Selected = ({title, imageUrl, description})=>{
    
    useEffect(() => {},[imageUrl])

    return(
        <S.Container>
            <S.Obeject1 />
            <S.Obeject2 />
            <S.Obeject4 />
            <S.Obeject6 />
            <S.Favorite>
                <S.Strong>
                    <Link>
                        <AiOutlineStar></AiOutlineStar>
                    </Link>
                </S.Strong>
            </S.Favorite>
            <S.Img width="240" height="370" src={imageUrl}></S.Img>
            <S.Content>
                <S.Name>{title}</S.Name>
                <S.Description>{description}</S.Description>
            </S.Content>
        </S.Container>
    )
    
}

export default Selected;