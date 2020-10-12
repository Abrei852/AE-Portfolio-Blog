import styled from "styled-components"
//Fixa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const JobsWrapper = styled.section`
    padding: 5rem 0;

    `

    export const JobsContainer = styled.div`
        width: 80vw;
        margin: 0 auto;
        max-width: var(--max-width);

        @media ${props => props.theme.breakpoints.largescreen}{
            width: 90vw;
            display: grid;
            grid-template-columns: 200px 1fr;
            column-gap: 4rem;
        }

        `

        export const ButtonWrapper = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 4rem;

            button{
                background: transparent;
                border-color: transparent;
                text-transform: capitalize;
                font-size: 1.25rem;
                letter-spacing: var(--spacing);
                margin: 0 0.5rem;
                cursor: pointer;
                padding: 0.25rem 0;
                line-height: 1;

                :focus{
                    color: ${({ active }) => active ? "black" : "black"};  
                    box-shadow: 0 2px ${props => props.theme.colors.beautifulsky};
                }
            }

            @media ${props => props.theme.breakpoints.largescreen}{
                flex-direction: column;
                justify-content: flex-start;
                button{
                    margin-bottom: 1rem;

                :hover{
                    font-size: 1.5rem;
                }
                }
            }
        `