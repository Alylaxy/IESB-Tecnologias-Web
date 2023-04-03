import styled from "styled-components";

export const Container = styled.div`
    height: 76px;
    width: 930px;
    display: flex;
    flex-direction: row;
`;

export const BoxButton = styled.div`
    display: flex;
    width: 70px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid;
    align-content: center;
    justify-content: space-between;
    padding: 0px 16px;
    background: #000;
    margin-right: 20px;
`;

export const Label = styled.text`
    font-family: 'Poppins';
    align-self: center;
    color: #FFF;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
`;

export const BoxPesquisa = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 16px;

    width: 344px;
    height: 42px;
`;

export const Pesquisa = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    width: 40px;
    height: 42px;
    border-radius: 5px 0px 0px 5px;
    background: #000;
`;

export const Input = styled.input`
    display: flex;
    flex: 1;
    height: 38px;
    border-radius: 0px 5px 5px 0px; 
    border: 1px solid;

    outline: none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;  
`;