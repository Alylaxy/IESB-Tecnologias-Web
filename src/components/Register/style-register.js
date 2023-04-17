import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;

    position: absolute;
    width: 486px;
    height: 360px;
    left: 732px;
    top: 220px;
`;

export const Label = styled.label`
    width: 486px;
    height: 80px;

    /* Heading/H1 */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 80px;
    /* identical to box height, or 125% */

    letter-spacing: -0.02em;

    /* Grey/100 */

    color: #C3C8D4;


    /* Inside auto layout */

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
    height: auto;

    flex: none;
    order: 1;
    flex-grow: 1;

    color:white;
`

export const ContainerInput = styled.div`
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;

    width: 386px;
    height: 54px;

    /* Black/10 */

    background: rgba(0, 0, 0, 0.1);
    /* Grey/700 */

    border: 1px solid #323B54;
    border-radius: 12px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 8px;

    width: 386px;
    height: 56px;

    /* Primary/400 */

    background: #1E90FF;
    /* Primary/400 */

    border: 2px solid #1E90FF;
    border-radius: 12px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
`;

export const TextButton = styled.a`
    /* Search */


    width: 100px;
    height: 24px;

    /* Body/Regular */

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

