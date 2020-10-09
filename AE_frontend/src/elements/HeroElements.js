import styled from "styled-components"

export const HeroWrapper = styled.header`
    padding-top: 3rem;
    background: ${props => props.theme.colors.primary10};
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
    `
    export const Article = styled.article`
    margin: 0 auto;
`
