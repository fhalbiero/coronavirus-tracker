import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 500px;

    svg {
        max-width: 1040px;
        margin: -240px auto; 

        path {

            &:hover {
                stroke: rgba( 243, 7, 203, 1);  
            }
        }
    }

    div {
        max-width: 1040px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        h1 {
            font-size: 24px;
            padding: 36px;
        }
    }

`;