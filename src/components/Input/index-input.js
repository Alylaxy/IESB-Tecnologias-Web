import React from 'react'
import * as S from "./style-input";

const Input = ({type, placeholder, value, onChange}) => {
  return (
    <S.Input
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}  
      />
  )
}

export default Input