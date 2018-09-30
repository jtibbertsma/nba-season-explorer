import { combineReducers } from 'redux';
import data from './data';
import misc from './misc';
import filters from './filters';

export default combineReducers({
  data,
  misc,
  filters
});
