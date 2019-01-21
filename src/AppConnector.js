import { connect } from 'react-redux';
import { get } from 'lodash';
import App from "./App";
const mapStateToProps = state => ({
    isLogin: get(state, 'user.isLogin', false),
    state: state
});

const mapDispatchToDrops = dispatch => ({

});

export const AppConnected =  connect(mapStateToProps, mapDispatchToDrops)(App);