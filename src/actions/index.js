import { createAction } from 'redux-actions';
import {
  IMPORT_DATA,
  LOAD_DATA,
  SET_NEED_LOAD_DATA,
  SET_SELECTED_TEAMS
} from '../constants/actions';

export const importData = createAction(IMPORT_DATA);
export const loadData = createAction(LOAD_DATA);
export const setNeedLoadData = createAction(SET_NEED_LOAD_DATA);
export const setSelectedTeams = createAction(SET_SELECTED_TEAMS);
