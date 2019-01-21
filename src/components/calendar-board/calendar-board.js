import React, { Component } from 'react';
import { EventConnected } from "../event/connectors";

export class CalendarBoard extends Component {
    render() {
        const { events = [] } = this.props;
        let hours = [8, 9, 10, 11, 12, 1, 2, 3, 4];
        return (
            <div className='calendar_board'>
                {
                    hours.map( hour =>
                            <div className='hour' key={ hour }>
                                <div className='calendar_board-hour board-hours'>{`${hour}.00`}</div>
                                <div className='calendar_board-half-hour board-hours'>{`${hour}.30`}</div>
                            </div>
                    )
                }
                <div className="event_container">
                    {
                        events.map( (event, i) => <EventConnected data={ event } key={ i }/>)
                    }
                </div>
            </div>
        );
    }
}