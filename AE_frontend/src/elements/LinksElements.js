import styled from "styled-components"

export const Ul = styled.ul`
    display: none;

    @media ${props => props.theme.breakpoints.mediumscreen}{
        display: flex;
        justify-content: flex-end;

        li{
            margin-right: 2rem;

            a{
                text-transform: capitalize;
                color: black;
                padding: 0.5rem 0;
            }
        }
    }
`