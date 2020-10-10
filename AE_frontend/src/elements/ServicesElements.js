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
    };
    
`