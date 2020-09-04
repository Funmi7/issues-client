import { combineReducers } from "redux";

import userReducer from "./authenticationReducer";
import * as reducers from "./issuesReducer";

const appReducer = combineReducers({
  userReducer,
  isLoading: reducers.loadingReducer,
  issuesList: reducers.issuesReducer,
  addIssue: reducers.addIssueReducer
  
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;