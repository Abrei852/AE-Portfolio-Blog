import styled from "styled-components"

export const Section = styled.section`
    padding: 5rem 0;
    background-color: ${props => props.theme.colors.grey8};
`

    export const Div = styled.div `
    margin: 0 auto;
    max-width: 1170px;

    @media ${props => props.theme.breakpoints.mediumscreen}{
        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 1rem;
    }

    @media ${props => props.theme.breakpoints.largescreen}{
        grid-template-columns: 1fr 1fr 1fr;
    }
    `
    export const Article = styled.article`
        background: white;
        padding: 3rem 1.5rem;
        margin-bottom: 2rem;
        border-radius: var(--radius);
        text-align: center;
        -webkit-transition: all 0.3s linear;
        transition: all 0.3s linear;
        box-shadow: ${props => props.theme.shadows.shadow2};

        svg{
            margin-bottom: 1.5rem;
        }

        :hover{
            background: ${props => props.theme.colors.primary7};
            color: ${props => props.theme.colors.primary10};
        }
        `  
        