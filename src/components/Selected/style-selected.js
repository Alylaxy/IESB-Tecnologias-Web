import styled from "styled-components";

export const Container = styled.div`
    width: 1080px;
    height: 400px;
    border-radius: 12px;
    background: #999;
    margin-bottom: 20px;;
`;

export const FilmContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    width: 1020px;
    height: 400px;
    border-radius: 5px;
    background: #000;
    margin-left: 8px;

    background: rgba(32, 40, 62, 0.8);
    backdrop-filter: blur(40px);

    border-radius: 12px;
`;

export const Content = styled.div`

`

export const Description = styled.a`

`;

export const Favorite = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 8px;
    gap: 4px;

    position: absolute;
    width: 30px;
    height: 20px;
    left: 16px;
    top: 18px;

    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(4px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a{
        text-decoration: none;
        color: #FFDF00;
    }
`;

export const Img = styled.img`
    width: 210;
    height: 390;
    border-radius: 12px;
`;

export const Name = styled.h3`
    color: white;
    align-self: center;
`;