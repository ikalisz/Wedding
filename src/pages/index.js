import {
    Switch,
    Route,
} from 'react-router-dom';
import Welcome from '../components/welcome';
import Registry from '../components/registry';
import Story from '../components/story';
import Rsvp from '../components/rsvp';
import Venue from '../components/venue';

function Routes () {
    return (
        <Switch>
            <Route path="/rsvp" component={Rsvp} />
            <Route path="/venue" component={Venue} />
            <Route path="/story" component={Story} />
            <Route path="/registry" component={Registry} />
            <Route exact path="/" component={Welcome} />
        </Switch>
    )
}

export default Routes