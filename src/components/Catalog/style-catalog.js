import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 8px 16px;
    gap: 16px;
    margin-left: 10px;

    width: 210px;
    height: 335px;

    background: rgba(32, 40, 62, 0.8);
    backdrop-filter: blur(40px);

    border-radius: 12px;
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
    margin: 0px;
`;