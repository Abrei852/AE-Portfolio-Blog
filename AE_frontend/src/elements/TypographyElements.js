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