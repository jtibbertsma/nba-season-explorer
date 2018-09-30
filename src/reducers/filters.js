import {
  SET_SELECTED_TEAMS,
  SET_SHOW_TYPE
} from '../constants/actions';

const defaultState = {
  showType: "all",
  selectedTeams: []
};

export default function filtersReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SELECTED_TEAMS:
      return {
        ...state,
        selectedTeams: action.payload
      };

    case SET_SHOW_TYPE:
      return {
        ...state,
        showType: action.payload
      };

    default:
      return state;
  }
}
