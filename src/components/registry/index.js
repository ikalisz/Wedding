import React from 'react';
import styled from 'styled-components';

function Registry () {
    return (
        <SRegistry>
            Registry
        </SRegistry>
    )
}

export default Registry

const SRegistry = styled.div`
    width: 100vw;
    height: 500px;
    background-color: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`