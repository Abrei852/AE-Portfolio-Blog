import styled from "styled-components"

export const SidebarWrapper = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    background-color: ${props => props.theme.colors.grey8};
    place-items: center;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: all 0.2s;
`