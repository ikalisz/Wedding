import React from 'react';
import styled from 'styled-components';
import Routes from '../../pages';
import Header from '../header';

function Main () {
    return (
        <div>
            <Header />
            <Routes />
        </div>
    )
}

export default Main

const MainContainer = styled.div`
    display: flex;
`