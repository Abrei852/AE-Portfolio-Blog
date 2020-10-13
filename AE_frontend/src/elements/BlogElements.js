import styled from "styled-components"

export const BlogWrapper = styled.article`
    display: block;
    margin-bottom: 2rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);

    :hover{
        box-shadow: var(--dark-shadow);
        transform: scale(1.02);
    }
`