import styled from "styled-components"
//Fixa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const JobsWrapper = styled.section`
    padding: 5rem 0;

    `
    export const JobsCenter = styled.div`
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
                transition: var(--transition);
                cursor: pointer;
                padding: 0.25rem 0;
                line-height: 1;

                :focus{
                    color: ${({ active }) => active ? 'black' : "white"};  color: var(--clr-primary-5);
                    box-shadow: 0 2px var(--clr-primary-5);
                }
            }
        `
    



console.log();