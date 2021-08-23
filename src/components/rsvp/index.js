import React from 'react';
import styled from 'styled-components';

function Rsvp () {
    return (
        <SRsvp>
            RSVP baby
        </SRsvp>
    )
};

export default Rsvp

const SRsvp = styled.div`
    width: 100vw;
    height: 500px;
    background-color: yellow;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`