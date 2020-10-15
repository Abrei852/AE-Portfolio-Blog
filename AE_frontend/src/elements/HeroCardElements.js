import styled from "styled-components"

export const HeroCardWrapper = styled.div`

    @media ${props => props.theme.breakpoints.mediumscreen}{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 6rem repeat(5, 1fr);
        column-gap: 1rem;
        row-gap: 1rem;
        background: transparent;
        margin-left: 1rem;

        h2{
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
    }

`
export const LinkWrapper = styled.div`
    @media ${ props => props.theme.breakpoints.mediumscreen}{
        grid-column: 1 / span 2;
        grid-row: 4 / span 3;
        box-shadow: ${props => props.theme.shadows.shadow2};
        padding: 1rem;
        text-align: center;
        margin: 0 0 auto;

        a{
            font-size: 1.3rem;
            margin: 0 1rem;

            :hover{
                color: ${props => props.theme.colors.beautifulsky};
            }
        }
    }
`
export const AboutMeWrapper = styled.div`
    @media ${props => props.theme.breakpoints.mediumscreen}{
        grid-column: 1 / span 2;
        grid-row: 1 / span 3;
        box-shadow: ${props => props.theme.shadows.shadow2};
        padding: 1rem;
        margin: auto 0;

        p{
            margin-bottom: 2rem;
        }
    }
`