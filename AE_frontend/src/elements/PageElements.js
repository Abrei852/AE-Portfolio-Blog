import styled from "styled-components"

export const ErrorPageWrapper = styled.main`
    background: white;
    text-align: center;
    height: 76vh;
`
export const ContactPageWrapper = styled.section`
    display: grid;
    place-items: center;
    padding: 5rem 0;
    min-height: calc(100vh - 5rem - 9rem);
`
export const ContactFormWrapper = styled.article`
    background: white;
    text-align: center;
    box-shadow: ${props => props.theme.shadows.shadow1};
    width: 90vw;
    max-width: 35rem;

    h3{
        padding-top: 1.25rem;
        color: ${props => props.theme.colors.grey3};
    }

    div{
        padding: 1rem 1.5rem;
    }

    input, textarea{
        display: block;
        width: 100%;
        padding: 0.75rem 1rem;
        border: none;
        margin-bottom: 1.25rem;
        background: ${props => props.theme.colors.grey8};
        text-transform: uppercase;
        letter-spacing: 0.3rem;
    }

    button{
        display: block;
        width: 100%;
        padding: 1.2rem;
        color: black;
        background-color: ${props => props.theme.colors.beautifulsky};
        border-style: none;

        :hover{
            cursor: pointer;
            color: white;
        }
    }
`