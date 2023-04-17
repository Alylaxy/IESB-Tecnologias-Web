import styled from "styled-components";

export const FilmContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: 40px;

    width: 1000px;
    height: 400px;
    border-radius: 5px;

    backdrop-filter: blur(40px);

    border-radius: 12px;
`;

export const Content = styled.div`

`

export const Description = styled.a`
    color: #8E95A9;
    align-self: center;
    font-size: 15px;
    font-family: 'Poppins';
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
    margin: 4px;
    margin-right: 20px;
    
    border: 4px solid rgba(52, 60, 82, 0.8);
`;

export const Name = styled.h3`
    color: #EBEEF5;
    align-self: center;
    font-size: 30px;
    font-family: 'Poppins';
`;

/* Objetos do background*/

export const Obeject1 = styled.div`
    position: absolute;
    width: 244px;
    height: 172.5px;
    left: -10px;
    top: 130px;

    background: #0C4265;
    filter: blur(175px);
    z-index: -1;
`
export const Obeject2 = styled.div`
    position: absolute;
    width: 200.84px;
    height: 133.28px;
    left: 778.51px;
    top: 100px;

    background: #251E62;
    filter: blur(175px);
    transform: rotate(-135deg);
`

export const Obeject4 = styled.div`
    position: absolute;
    width: 200.84px;
    height: 133.28px;
    left: 390.03px;
    top: 579.52px;

    background: #492C66;
    filter: blur(175px);
    transform: rotate(-135deg);
`

export const Obeject6 = styled.div`
    position: absolute;
    width: 244px;
    height: 172.5px;
    left: 722px;
    top: 620px;

    background: #02523A;
    filter: blur(175px);
`