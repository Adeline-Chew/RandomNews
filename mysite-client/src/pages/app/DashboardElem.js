import styled from "styled-components";

export const Container = styled.div`
    margin-top: 80px;
`;

export const DashboardTitle = styled.h1`
    font-family: "Rubik", sans-serif;
    padding-top: 50px;
    margin-bottom: 50px;
`;

export const NewsButton = styled.button`
    border-radius: 40px;
    border: none;
    background: #0061a8;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-bottom: 100px;

    /* Change colour when hovering over the button */
    &:hover {
        transition: all 0.2s ease-in-out;
        background: transparent;
        color: #010606;
        border: 2px solid #0061a8;
    }
`;

export const NewsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 50px;
    height: 100%;
`;

export const NewsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    max-width: 1200px;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ImgWrap = styled.div `
    /* max-width: 70%;
    max-height: 50%; */
    
`

export const NewsImg = styled.img`
    width: 400px;
    height: 250px;
    margin-bottom: 20px;
    border-radius: 15px;
`;

export const NewsTitle = styled.h3`
    font-size: 2rem;
    color: #000;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const NewsP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 20px;
`;
