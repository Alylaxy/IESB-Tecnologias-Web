import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0px;

    flex: 1;
    height: 52px;
    left: 0px;
    top: 0px;

    backdrop-filter: blur(20px);
    background: rgba(18, 24, 41, 0.8);
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 12px 16px;
    width: 190px;
    height: 48px;
    justify-content: space-between;
    list-style-type: none;
`;

export const Li = styled.li`
    font-family: 'Poppins';
    align-self: center;
    color: #000;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a{
        text-decoration: none;
    }
`;

export const Img = styled.img`
    width: 90px;
    height: 60px;
`;