import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload === { prop: 'name', value: 'jane'}
            //[] here is key interpolation. Not an array
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
        case EMPLOYEE_SAVE_SUCCESS:
            //reset form UI when creation is completed
            return INITIAL_STATE;
        default:
            return state;
    }
};
