import styled from "styled-components"

export const ProjectWrapper = styled.article`
    display: grid;
    margin-bottom: 4rem;
    background: ${props => props.theme.colors.grey8};

    :hover{
        transform: scale(1.02);
        box-shadow: ${props => props.theme.shadows.shadow2};
    }

    img{
        height: 19rem;
        z-index: 1;
    }

    img::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, var(--clr-primary-5), #222);
        opacity: 0.85;
    }
    @media ${props => props.theme.breakpoints.mediumscreen}{
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
        
        .gatsby-image-wrapper{
            grid-column: 1/ span 5;
            height: 30rem;
        }
    }
`
export const InfoWrapper = styled.div`
    padding: 1rem 1rem;

    @media ${props => props.theme.breakpoints.mediumscreen}{
        z-index: 1;
        grid-column: 6 /13;
        grid-row: 1 / 1;
    }
`
export const ProjectStackWrapper = styled.div`
    margin-bottom: 3rem;
    background: ${props => props.theme.colors.grey7};
    color: ${props => props.theme.colors.grey5};
    padding: 0.375rem 0.75rem;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
`
export const ProjectLinkWrapper = styled.div`
    text-align: center;
    a{
        cursor: none;
        margin: 0 2.5rem;
        svg{
            :hover{
                color: white;
                cursor: pointer;
            }
        }
    }
`