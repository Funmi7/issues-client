import * as types from "../actions/issuesAction";

const initialLoadingState = true;
export const loadingReducer = (state = initialLoadingState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

const initialIssuesState = [];

export const issuesReducer = (state = initialIssuesState, action) => {
  switch (action.type) {
    case types.SET_ISSUES_LIST:
      return action.payload;
    default:
      return state;
  }
};

const initialAddIssueFormState = {
  id: null,
  title: "",
  description: "",
  created_by: "",
  location: "",
  imageUrl:""
};

export const addIssueReducer = (state = initialAddIssueFormState, action) => {
  switch (action.type) {
    case types.SET_ISSUES_LIST:
      return initialAddIssueFormState;
    case types.ON_ISSUES_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case types.EDIT_ISSUE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
