import {GET_ALL_DAY_DATA_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../global/actions-constants";
const initialState = {
    events: [],
    user: {}
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DAY_DATA_SUCCESS:
            return {
                ...state,
                events: action.payload
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    isLogin: true,
                    userId: action.payload.userId
                }
            };
        case LOGOUT_SUCCESS:
            return initialState;
        default:
            return state
    }
};

export default rootReducer;