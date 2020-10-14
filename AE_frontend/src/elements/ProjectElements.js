import styled from "styled-components"

export const ProjectWrapper = styled.article`
    display: grid;
    margin-bottom: 4rem;
    background: ${props => props.theme.colors.grey8};
    cursor: pointer;

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
        transition: var(--transition);
    }
`
export const InfoWrapper = styled.div`
    padding: 1rem 2rem;
`