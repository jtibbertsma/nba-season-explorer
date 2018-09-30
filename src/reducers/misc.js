import {
  LOAD_DATA,
  SET_NEED_LOAD_DATA
} from '../constants/actions';

const defaultState = {
  // Defaults to true so that the data gets loaded
  needLoadData: true
};

export default function miscReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        needLoadData: true
      };

    case SET_NEED_LOAD_DATA:
      return {
        ...state,
        needLoadData: action.payload
      };

    default:
      return state;
  }
}
