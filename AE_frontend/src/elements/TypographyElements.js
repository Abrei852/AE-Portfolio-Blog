import styled from "styled-components"

//Styling for the H1 tag
export const H1 = styled.h1`
    font-size: ${props => {
        switch(props.fontsize){

            case "xsmall":
                return props.theme.fontsizes.xsmall
            
            case "small":
                return props.theme.fontsizes.small
            
            case "medium":
                return props.theme.fontsizes.medium
            
            case "large":
                return props.theme.fontsizes.large

            default:
                return props.theme.fontsizes.medium
        }
    }};
`
//Styling for the H2 tag
export const H2 = styled.h2`
    font-size: ${props => {
        switch(props.fontsize){

            case "xsmall":
                return props.theme.fontsizes.xsmall
            
            case "small":
                return props.theme.fontsizes.small
            
            case "medium":
                return props.theme.fontsizes.medium
            
            case "large":
                return props.theme.fontsizes.large

            default:
                return props.theme.fontsizes.small
        }
    }};
`
//Styling for the H3 tag
export const H3 = styled.h3`
    font-size: ${props => {
        switch(props.fontsize){

            case "xsmall":
                return props.theme.fontsizes.xsmall
            
            case "small":
                return props.theme.fontsizes.small
            
            case "medium":
                return props.theme.fontsizes.medium
            
            case "large":
                return props.theme.fontsizes.large

            default:
                return props.theme.fontsizes.small
        }
    }};
    font-weight: 400;
`
//styling fro the H4 tag
export const H4 = styled.h4`
    font-size: ${props => {
        switch(props.fontsize){
            case "xsmall":
                return props.theme.fontsizes.xsmall
            
            case "small":
                return props.theme.fontsizes.small
            
            case "medium":
                return props.theme.fontsizes.medium
            
            case "large":
                return props.theme.fontsizes.large

            default:
                return props.theme.fontsizes.small
        }
    }};
    text-transform: uppercase;
    color: ${props => props.theme.colors.grey5};
    background: ${props => props.theme.colors.grey7};
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
`
//Styling for the P tag
export const P = styled.p`
    letter-spacing: 0.2rem;
`