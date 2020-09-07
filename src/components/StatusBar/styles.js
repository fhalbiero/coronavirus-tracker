import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;  
    justify-content: center;
    width: 100%;
    background-color: #36393f;

    h2 {
        font-size: 18px;
        margin: 16px;
        color: #a5a8ab;
    }

    div {
        max-width: 1040px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        h1 {
            font-size: 16px;
            padding: 28px;
        }
    }

`;