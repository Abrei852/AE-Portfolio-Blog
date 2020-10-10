import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//Styling for the button
export const ButtonWrapper = styled(props => <Link {...props} />) `
margin: auto;
padding: 1rem;
background-color: ${props => props.theme.colors.main1};
border-radius: 0.5rem;
color: ${props => props.theme.colors.light1};
font-weight: 700;
font-size: 0.875rem;
width: fit-content;
transition: filter 0.3s ease;
text-decoration: none;
margin: inherit;

&:hover,
&:focus {
  filter: brightness(70%);
}
`