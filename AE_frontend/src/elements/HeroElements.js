import styled from "styled-components"

export const HeroWrapper = styled.header`

    margin-top: -5rem;
    padding-top: 10rem;
    height: 100vh;
    background: ${props => props.theme.colors.primary10};
    position: relative;
    text-align: center;


    Img{
        display: none;
    }

    ul{
        margin-top: 2rem;
        text-align: left;

    }

    li{
        margin-top: 0.5rem;
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
        margin: auto;
    
`
