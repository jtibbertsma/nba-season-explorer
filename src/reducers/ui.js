import { SET_SIDEBAR_VISIBILITY } from '../constants/actions';

const defaultState = {
  sidebarVisible: false
};

export default function uiReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SIDEBAR_VISIBILITY:
      return {
        ...state,
        sidebarVisible: action.payload
      };

    default:
      return state;
  }
}
