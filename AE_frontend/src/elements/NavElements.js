import styled from "styled-components"

export const NavWrapper = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    z-index: 200;
    background-color: white;

    @media ${props => props.theme.breakpoints.largescreen}{
        background: transparent;
    }
`
export const Div = styled.div`
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;

    @media ${props => props.theme.breakpoints.largescreen}{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
    }
`
export const NavHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`