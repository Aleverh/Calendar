import { connect } from 'react-redux';
import { get } from 'lodash';
import { NewEventContaiter } from "./new-event-block";
import { addNewEventAction, logoutAction, exportToJsonAction } from "../../global/actions-constants";

const mapStateToProps = state => ({
    events: get(state, 'events')
});

const mapDispatchToDrops = dispatch => ({
    addNewEvent: data => dispatch(addNewEventAction(data)),
    logout: () => dispatch(logoutAction),
    exportJson: () => dispatch(exportToJsonAction)
});

export const NewEventContaiterConnected =  connect(mapStateToProps, mapDispatchToDrops)(NewEventContaiter);

