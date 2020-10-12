import styled from "styled-components"
//Fixa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const JobsWrapper = styled.section`
    padding: 5rem 0;
    `

    export const JobsContainer = styled.div`
        width: 80vw;
        margin: 0 auto;
        max-width: var(--max-width);
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
                    color: ${({ active }) => active ? 'black' : props => props.theme.colors.beautifulsky};  
                    box-shadow: 0 2px ${props => props.theme.colors.beautifulsky};
                }
            }
        `