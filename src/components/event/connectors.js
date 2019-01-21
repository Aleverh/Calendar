import { connect } from 'react-redux';
import { get } from 'lodash';
import { deleteEventAction } from "../../global/actions-constants";
import { Event } from "./event";

const mapStateToProps = state => ({
    events: get(state, 'events')
});

const mapDispatchToDrops = dispatch => ({
    deleteEvent: id => dispatch(deleteEventAction(id))
});

export const EventConnected =  connect(mapStateToProps, mapDispatchToDrops)(Event);

