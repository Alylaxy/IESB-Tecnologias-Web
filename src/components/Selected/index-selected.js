import * as S from "./style-selected"
import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useEffect } from "react";

const Selected = ({title, imageUrl, description})=>{
    
    useEffect(() => {console.log(typeof(title))},[imageUrl])

    return(
        <S.Card>
            <S.Favorite>
                <S.Strong>
                    <Link>
                        <AiOutlineStar></AiOutlineStar>
                    </Link>
                </S.Strong>
            </S.Favorite>
            <S.Img width="210" height="390" src={imageUrl}></S.Img>
            <S.Content>
                <S.Name>{title}</S.Name>
                <S.Description>{description}</S.Description>
            </S.Content>
        </S.Card>
    )
    
}

export default Selected;