import React from 'react';
import styled from 'styled-components';

function Venue () {
    return (
        <SVenue>
            Venue
        </SVenue>
    )
}

export default Venue

const SVenue = styled.div`
    width: 100vw;
    height: 500px;
    background-color: grey;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`