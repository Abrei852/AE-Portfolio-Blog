import styled from "styled-components"

export const HeroWrapper = styled.header`

    margin-top: -5rem;
    padding-top: 10rem;
    height: 100vh;
    background: var(--clr-primary-10);
    position: relative;
    
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
        background-color: ${props => props.theme.colors.primary10}
    
`
