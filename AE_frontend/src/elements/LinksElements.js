import styled from "styled-components"

export const LinksWrapper = styled.div`
    ul a{
        display: ${({ toggleSidebar }) => toggleSidebar ? 'block' : 'none'};
        text-align: center;
        text-transform: capitalize;
        color: ${props => props.theme.colors.grey5};
        letter-spacing: 0.2rem;
        margin-bottom: 3rem;
        font-size: 2rem;
    }

    @media ${props => props.theme.breakpoints.mediumscreen}{

        ul{
            display: flex;
            justify-content: flex-end;
        }

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
