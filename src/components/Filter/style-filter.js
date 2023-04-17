import styled from "styled-components";

/*Div geral*/

export const Container = styled.div`
    height: auto;
    width: 930px;
    display: flex;
    flex-direction: column;
`;

export const ContainerPesquisa = styled.div`
    display: flex;
    flex-direction: row;
`;

/*Filtro por aba*/

export const Filtros = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 60px;
    min-width: auto;

    background: rgba(28, 34, 51, 0.8);
    backdrop-filter: blur(40px);
    border-radius: 0px 12px 12px 12px;
`;

export const Strong = styled.strong`
    cursor: pointer;
    display: flex;
    margin: 5px;
	text-align: center;
	font-size: 1.5em;
    flex:1;
    font-size: 15px;
    font-family: 'Poppins';
    align-self: center;
    justify-content: center;

    &:hover{
        filter: brightness(1.2);
    }

    a{
        text-decoration: none;
        color: #CCCCCC;
        &:hover{
            filter: brightness(1.2);
        }
    }
`;

/*Filtro Dropdown*/

export const Nav = styled.nav`
    height: var(--nav-size);
    padding: 0 1rem;
`;

export const Ul = styled.ul`
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    list-style:none;
    margin: 0;
    padding: 0;
`;

export const Li = styled.li`
    width: calc(var(--nav-size) * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const iconButton = styled.a`
    --button-size: calc(var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
    background-color: rgba(28, 34, 51, 0.8);
    padding: 11px;
    display: flex;
    align-items: center;
    border-top-left-radius: 12px;
    justify-content: center;
    transition: filter 300ms;
    color: var(--text-color);
    text-decoration: none;

    &:hover{
        filter: brightness(2);
    }

    & svg {
        fill: var(--text-color);
        width: 20px;
        height: 20px;
    }
`;

export const SpanIconButton = styled(iconButton);

export const menuItem = styled.a`
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;

    &:hover{
        background-color: #525357;
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 58px;
    width: 300px;
    transform: translateX(-50%);
    transform: translateY(30%);
    background-color: var(--bg);
    border: var(--border);
    border-radius: var(--border-radius);
    padding: 1rem;
    overflow: hidden;
`;

export const Categorie = styled.div`
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #CCCCCC;
    min-width: 80px;
    min-height: 40px;
`;

/*Filtro pesquisa*/

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
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    transition: border-color 0.2s ease-in-out;

    &:focus-within{
        border-color: #AAAAAA;
    }
`;

export const Search = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    width: 40px;
    height: 42px;
    border-radius: 5px 0px 0px 5px;
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
    color: white;
`;