import {
  SET_SELECTED_TEAMS
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

    default:
      return state;
  }
}
