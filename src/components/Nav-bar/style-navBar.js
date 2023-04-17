import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px;

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
    height: 48px;
    gap: 30px;
    justify-content: space-between;
    list-style-type: none;
`;

export const Li = styled.li`
    font-family: 'Poppins';
    align-self: center;
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

export const Span = styled.span`
    cursor: pointer;
	transition: all 0.3s;
	position: relative;
    color: #FFFFFF;

    &span{
        transition: all 0.3s;
    }
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-top-style: solid;
        border-bottom-style: solid;
        border-top-color: rgba(255,255,255,0.5);
        border-bottom-color: rgba(255,255,255,0.5);
        transform: scale(0.1, 1);
    }
    &:hover span {
        letter-spacing: 2px;
    }
    &:hover::before {
        opacity: 1;	
        transform: scale(1, 1);	
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all 0.3s;
        background-color: rgba(18, 24, 41, 0.8);
    }
    &:hover::after {
        opacity: 0;	
        transform: scale(0.1, 1);
    }
`;


