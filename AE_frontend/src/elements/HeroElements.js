import styled from "styled-components"

export const HeroWrapper = styled.header`

    margin-top: -5rem;
    padding-top: 10rem;
    height: 100vh;
    background: ${props => props.theme.colors.primary10};
    position: relative;

    Img{
        display: none;
    }
    @media ${props => props.theme.breakpoints.LargeScreen}{
        Img{
            display: block;
            grid-row: 1/1;
            grid-column: 6/-1;
        }
    }

    `
    export const Div = styled.div`

        height: 100%;
        display: grid;
        align-items: center;
        width: 90vw;
        margin: 0 auto;
        max-width: 1170px;
    
    `
    export const Article = styled.article`
        background-color: ${props => props.theme.colors.primary10};
        margin: auto;
    
`
