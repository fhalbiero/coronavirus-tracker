import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    background-color: #202225;
    
    h4 {
        font-size: 16px;
        color: #a5a8ab;
    }

    p {
        color: #a5a8ab;
    }

    a {
        font-size: 16px;
        transition: all .3s;

        &:hover {
            color: #43b581;
        }
    }

`; 