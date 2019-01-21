import { connect } from 'react-redux';
import { get } from 'lodash';
import { Day } from "./dayComponent";
import { getAllDayDataAction } from "../../global/actions-constants";

const mapStateToProps = state => ({
    events: get(state, 'events')
});
const mapDispatchToDrops = dispatch => ({
    getAllDayData: () => dispatch(getAllDayDataAction())
});
export const DayConnected =  connect(mapStateToProps, mapDispatchToDrops)(Day);
