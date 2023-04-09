import React from 'react'
import * as S from "./style-button"

const Button = ({ Text, onClick, Type = "button"}) => {
  return (
    <S.Button type={Type} onClick={onClick}>
        {Text}
    </S.Button>
  )
}

export default Button;