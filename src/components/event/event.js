import React, { Component } from 'react';

export class Event extends Component {

    render() {
        const {
            start,
            duration,
            title,
            _id,
            isCollision,
            left
        } = this.props.data;

        const styles = {
            width: isCollision ? '50%' : '100%',
            height: `${ duration * 2 }px`,
            top: start * 2,
            left: left || 0
        };
        const onDeleteEvent = () =>
            this.props.deleteEvent(_id);

        return (
            <div className='event' style={ styles }>
                <p>{ title }</p>
                <i onClick={ onDeleteEvent }>✖</i>
            </div>
        );
    }
}