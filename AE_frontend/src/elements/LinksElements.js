import styled from "styled-components"

export const Ul = styled.ul`
    margin-top: -10rem;
    display: ${({ toggleSidebar }) => toggleSidebar ? 'block' : 'none'};

    li a{
        text-align: center;
        text-transform: capitalize;
        color: ${props => props.theme.colors.grey5};
        letter-spacing: 0.2rem;
        margin-bottom: 3rem;
        font-size: 1.5rem;
    }

    @media ${props => props.theme.breakpoints.mediumscreen}{
        margin-top: auto;
        display: flex;
        justify-content: flex-end;

        li a{
            text-transform: capitalize;
            color: black;
            font-size: 1.3rem;
        }
    }
`
