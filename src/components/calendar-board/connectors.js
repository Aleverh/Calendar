import { connect } from 'react-redux';
import { get } from 'lodash';
import { CalendarBoard } from "./calendar-board";
const mapStateToProps = state => ({
    events: get(state, 'events')
});

const mapDispatchToDrops = dispatch => ({

});

export const CalendarBoardConnected =  connect(mapStateToProps, mapDispatchToDrops)(CalendarBoard);
