import React, { useState } from 'react';
import styled from 'styled-components';
import {
    AppBar,
    Tabs,
    Tab,
} from '@material-ui/core'
import {
    Link,
    withRouter,
} from 'react-router-dom';

function LinkTab (props) {
    return (
        <Tab
            {...props}
        />
    )
}

function Header () {
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue)
    }

    return (
        <AppBar position="sticky">
            <Tabs
                variant="fullWidth"
                value={tabValue}
                onChange={handleChange}
            >
                <LinkTab value="/welcome" label="Welcome" to="/" component={Link} />
                <LinkTab value="/story" label="Story" to="/story" component={Link} />
                <LinkTab value="/venue" label="Venue" to="/venue" component={Link} />
                <LinkTab value="/rsvp" label="RSVP" to="/rsvp" component={Link} />
                <LinkTab value="/registry" label="Registry" to="/registry" component={Link} />
            </Tabs>
        </AppBar>
    )
};

export default withRouter(Header)
