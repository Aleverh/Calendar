import React, { Component } from 'react';
import { CalendarBoardConnected } from "../calendar-board/connectors";

export class Day extends Component {
    componentWillMount () {
        this.props.getAllDayData()
    }

    render() {
        return (
            <div className='day'>
                <CalendarBoardConnected/>
            </div>
        );
    }
}