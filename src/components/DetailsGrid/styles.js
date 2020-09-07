import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 48px;
    animation: 1.5s ${keyframes`${fadeIn}`}; 

    div {
        max-width: 1040px;
        width: 100%;
        height: 65vh;
        min-height: 400px;
        overflow: scroll;
        scrollbar-arrow-color: #000;
        scrollbar-color: rgba(0,0,0,0.6);

        &::-webkit-scrollbar {
            width: 0.80em;
            height: 0.80em;
        }

        &::-webkit-scrollbar-corner {
            background-color: rgba(10,10,20,0.3);
        }
        
        &::-webkit-scrollbar-track {
            background-color: rgba(10,10,20,0.2);
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: rgba(10,10,20,0.2);
        }

        table {
            width : 100%;
            min-width: 720px;

            th {
                background-color: #202225;
                padding: 8px 0;
                cursor: pointer;

                svg {
                    margin-top: -3px;
                    font-size: 0.8rem;
                    font-weight: 100;
                    color: #9f9f9f;
                    margin-right: 5px;
                }
            }
        }
    }

`;