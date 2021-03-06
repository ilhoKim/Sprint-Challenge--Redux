/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  SUCCESS_FETCHING,
  CREATING_SMURF,
  SUCCESS_CREATING,
  REJECTED,
  DELETING_SMURF,
  SUCCESS_DELETING
} from '../actions';

/*
 Your initial/default state for this project could look a lot like this
 */
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurfs: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  switch (action.type) {

    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    case SUCCESS_FETCHING:
      return Object.assign({}, state, {
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      });

    case CREATING_SMURF:
      return Object.assign({}, state, { addingSmurf: true });
    case SUCCESS_CREATING:
      return Object.assign({}, state, {
        addingSmurf: false,
        error: null,
        smurfs: action.payload
      });

    case REJECTED:
      return Object.assign({}, state, {
        error: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false
      });

    case DELETING_SMURF:
      return Object.assign({}, state, { deletingSmurf: true })
    case SUCCESS_DELETING:
      return Object.assign({}, state, {
        deletingSmurf: false,
        error: null,
        smurfs: action.payload
      });
    default:
      return state;
  }
};
