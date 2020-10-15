import styled from "styled-components"

export const HeroWrapper = styled.header`
    margin-top: -5rem;
    padding-top: 5rem;
    height: 100vh;
    background: ${props => props.theme.colors.primary10};
    position: relative;

    .gatsby-image-wrapper{
        display: none;
    }

    ul{
        text-align: left;
        margin: 2rem auto 3rem auto;
    }

    li{
        margin-top: 1.5rem;
    }


    @media ${props => props.theme.breakpoints.mediumscreen}{
        ::before{
        content: "";
        position: absolute;
        top: 0;
        left: 65%;
        right: 0;
        bottom: 0;
        background: white;
        }

        .gatsby-image-wrapper{
            display: block;
            grid-row: 1/1;
            grid-column: 6/-1;
        }
    }
`
export const Div = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    align-items: center;
    height: 100%;

    @media ${props => props.theme.breakpoints.mediumscreen}{
        grid-template-columns: repeat(12, 1fr);
        h2{
            font-size: 0.85rem;
        }
    }

    @media ${props => props.theme.breakpoints.largescreen}{
        h2{
            font-size: 1rem;
            line-height: 1rem;
        }
    }
`
export const Article = styled.article`
    background: white;
    color: ${props => props.theme.colors.grey3};
    
    @media ${props => props.theme.breakpoints.mediumscreen}{
        grid-row: 1/1;
        grid-column: 1 / span 8;
    }

    @media ${props => props.theme.breakpoints.largescreen}{
        grid-column: 1 / span 8;
    }
`

