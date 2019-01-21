import React, { Component } from 'react';

import './App.css';
import { DayConnected } from "./components/day-component/connectors";
import { NewEventContaiterConnected } from "./components/new-event-block/connectors";
import { LoginConnected } from './components/login/connectors'

class App extends Component {
    render() {
        const { isLogin } = this.props;
        return (
            <div className='App'>
                {!isLogin && <LoginConnected/> }
                {
                    isLogin && (
                        <div>
                            <NewEventContaiterConnected/>
                            <DayConnected/>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
