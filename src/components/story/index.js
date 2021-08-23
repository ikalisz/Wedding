import React from 'react';
import styled from 'styled-components';

function Story () {
    return (
        <SStory>
            Story of us.
        </SStory>
    )
};

export default Story

const SStory = styled.div`
    width: 100vw;
    height: 500px;
    background-color: green;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`