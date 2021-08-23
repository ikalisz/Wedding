import React from 'react';
import styled from 'styled-components';

function Welcome () {
    return (
        <SWelcome>
            Welcome to this page
        </SWelcome>
    )
}

export default Welcome

const SWelcome = styled.div`
    width: 100vw;
    height: 500px;
    background-color: blue;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`