import { connect } from 'react-redux';
import { get } from 'lodash';
import { Login } from "./login";
import { loginAction, createLoginAction } from "../../global/actions-constants";

const mapStateToProps = state => ({
    events: get(state, 'events')
});

const mapDispatchToDrops = dispatch => ({
    login: data => dispatch(loginAction(data)),
    createLogin: data => dispatch(createLoginAction(data))
});

export const LoginConnected = connect(mapStateToProps, mapDispatchToDrops)(Login);

