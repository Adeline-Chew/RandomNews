import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    background: "transparent";
    height: 80px;
    margin-top: -80px;
    display: ${({hide}) => (hide ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }`;

export const NavbarContainer = styled.div`
        display: flex;
        justify-content: space-between;
        height: 80px;
        z-index: 1;
        width: 100%;
        padding: 0 24px;
        max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-family: 'Cabin', sans-serif;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: semibold;
    text-decoration: none;

    /* Change colour when hovering over the button */
    &:hover { 
         transition: all 0.2s ease-in-out;
         background: transparent;
         color: #0061A8;
     }
`;

export const NavMenu = styled.ul  `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    padding-top: 20px;

    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavItem = styled.li `
    height: 80px;
`;

export const NavLinks = styled(LinkR) `
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
     @media screen and (max-width: 768px) {
         display: none;
     }
`;

export const NavBtnLink = styled(LinkR) `
     border-radius: 50px;
     background: #0061A8;
     white-space: nowrap;
     padding: 10px 22px;
     color: #fff;
     font-size: 16px;
     font-weight: bold;
     outline: none;
     cursor: pointer;
     transition: all 0.2s ease-in-out;
     text-decoration: none;

     /* Change colour when hovering over the button */
     &:hover { 
         transition: all 0.2s ease-in-out;
         background: transparent;
         color: #010606;
         border: 2px solid #0061A8;
     }
`


