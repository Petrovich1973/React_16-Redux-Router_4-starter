import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Navigation from './Common/Navigation';
import Screen1    from './Screen1';
import Screen2    from './Screen2';
import NotFound   from './NotFound';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="layout">

                <Navigation/>

                <Switch>
                    <Redirect exact from="/" to="/screen1"/>
                    <Route exact path="/screen1" component={Screen1}/>
                    <Route path="/screen2" component={Screen2}/> 
                    <Route component={NotFound}/>
                </Switch>

            </div>
        );
    }

}

App.displayName = 'App';

export default App;