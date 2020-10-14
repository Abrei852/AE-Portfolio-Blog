import styled from "styled-components"

export const BlogWrapper = styled.article`
    display: block;
    margin-bottom: 2rem;
    background: ${props => props.theme.colors.grey8};
    box-shadow: ${props => props.theme.shadows.shadow2};

    :hover{
        box-shadow: ${props => props.theme.shadows.shadow3};
        transform: scale(1.02);
    }
`