import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;

    width: 486px;
    height: 360px;
    left: 732px;
    top: 220px;
`;

export const Label = styled.label`
    width: 486px;
    height: 80px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 80px;

    letter-spacing: -0.02em;

    color: #C3C8D4;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background: transparent;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;

    width: auto;
    height: 48px;

    flex: none;
    order: 1;
    flex-grow: 1;

    color:white;
`

export const ContainerInput = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;

    width: 386px;
    height: 54px;

    background: rgba(0, 0, 0, 0.1);

    border: 1px solid #323B54;
    border-radius: 12px;

    flex: none;
    order: 0;
    flex-grow: 1;
`;

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 8px;

    width: 386px;
    height: 56px;

    background: #1E90FF;

    border: 2px solid #1E90FF;
    border-radius: 12px;

    flex: none;
    order: 0;
    flex-grow: 1;
`;

export const TextButton = styled.a`

    height: 24px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const LabelSignin = styled.label`
    font-size: 16px;
    color: #cccccc;
`;

export const LabelError = styled.label`
    font-size: 14px;
    color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a{
        text-decoration: none;
        color: #cccccc;
    }
`;

