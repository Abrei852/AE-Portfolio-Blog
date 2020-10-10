import styled from "styled-components"

export const HeroWrapper = styled.header`
    padding-top: 3rem;
    background: white;
    position: relative;
    text-align: center;

    Img{
        display: none;
    }

    ul{
        text-align: left;
        margin: 2rem auto 3rem auto;
    }

    li{
        margin-top: 1.5rem;
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

        display: grid;
        max-width: 1170px;
        box-shadow: ${props => props.theme.shadows.shadow2};
    `
    export const Article = styled.article`
    margin: 1.5rem auto 0 auto;
    
`
