import styled from "styled-components"

export const BlogWrapper = styled.article`
    display: block;
    margin-bottom: 2rem;
    background: ${props => props.theme.colors.grey8};
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
`