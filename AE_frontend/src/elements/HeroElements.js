import styled from "styled-components"

export const HeroWrapper = styled.header`
    padding-top: 3rem;
    background: white;
    position: relative;
    text-align: center;

    Img{
        display: none;
    }

    ul{
        text-align: left;
        margin: 2rem auto 3rem auto;
    }

    li{
        margin-top: 1.5rem;
    }


    @media ${props => props.theme.breakpoints.largescreen}{

        Img{
            display: block;
            grid-row: 1/1;
            grid-column: 6/-1;
        }
    }

`
    export const Div = styled.div`

        display: grid;
        box-shadow: ${props => props.theme.shadows.shadow2};


        //Here or Article
        @media ${props => props.theme.breakpoints.xlargescreen}{
            grid-row: 2/1;
            grid-column: 2 / span 1;

            :before{
                content: "";
                position: absolute;
                top: 0;
                left: 65%;
                right: 0;
                bottom: 0;
                background: white;
            }
 
        }
    `
    export const Article = styled.article`
        margin: 1.5rem auto 0 auto;
        @media ${props => props.theme.breakpoints.largescreen}{
            margin: 1.5rem auto 0 auto;
        }



    
`
