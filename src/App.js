import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import PLP from './Components/PLP';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" render={props => (
                    <PLP {...props} />)
                } />
            </Switch>
        );
    }
}

export default App;