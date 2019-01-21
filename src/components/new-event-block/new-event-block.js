import React, { Component } from 'react';

export class NewEventContaiter extends Component {
    render() {
        const onAddNewEvent = () => {
            const data = {
                start: this.startTime.value,
                duration: this.duration.value,
                title: this.title.value
            };
            this.props.addNewEvent(data);
        };
        return (
            <div>
                <button onClick={ this.props.logout }>Logout</button>
                <button onClick={ this.props.exportJson }>export to json</button>
                <div className='new_event__container'>
                    <input type="text" placeholder='Add title' ref={title => this.title = title}/>
                    <input type="text" placeholder='Add start time' ref={startTime => this.startTime = startTime}/>
                    <input type="text" placeholder='Add duration of event' ref={duration => this.duration = duration}/>
                    <button onClick={onAddNewEvent}>Create Event</button>
                </div>
            </div>
        );
    }
}