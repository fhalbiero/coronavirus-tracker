import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background-color: #202225;

    main {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between; 

        img {
            width: 3rem;
            margin-right: 16px;
        }

        h1 {
            font-size: 28px;
            color: #43b581;
        }
    }
    

    div {

        a {
            font-size: 20px;
            margin-left: 24px;
            transition: all .3s;

            &:hover {
                color: #43b581;
            }
        }
    }

`; 