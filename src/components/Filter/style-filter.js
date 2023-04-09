import styled from "styled-components";

export const Container = styled.div`
    height: 76px;
    width: 930px;
    display: flex;
    flex-direction: row;
`;

export const BoxButton = styled.div`

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    width: 85px;
    height: 52px;
    margin-right: 10px;

    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(40px);

    border-radius: 12px;
`;

export const Button = styled.button`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 32px;
    gap: 10px;

    width: 85px;
    height: 52px;

    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Label = styled.text`
    font-family: 'Poppins';
    align-self: center;
    color: #FFF;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
`;

export const BoxSearch = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
    width: 300px;
    height: 52px;
    background: rgba(0, 0, 0, 0);
    border: 1px solid #323B54;
    border-radius: 12px;
`;

export const Search = styled.div`
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
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0);
    border: none;
    outline: none;
    padding: 0px;
    height: 28px;
    flex: none;
    order: 1;
    flex-grow: 1;
`;