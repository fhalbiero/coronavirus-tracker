import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #36393f;
    padding: 0 26px 26px 26px;
    animation: 1.5s ${keyframes`${fadeIn}`};
    
    div {
        display: flex;
        flex-direction: column;

        h4 {
            font-size: 24px;
            font-weight: 500;
        }

        span {
            font-size: 14px;
            font-weight: 100;
            color: #a5a8ab;
            margin-bottom: 8px;
        }
    }  

`;