import withAuth from "../../utils/axiosWithAuth";

export const SET_LOADING = "SET_LOADING";
export const ON_ISSUES_INPUT_CHANGE = "ON_ISSUES_INPUT_CHANGE";
export const GET_ISSUES_LIST = "GET_ISSUES_LIST";
export const SET_ISSUES_LIST = "SET_ISSUES_LIST";
export const EDIT_ISSUE = "EDIT_ISSUE";

const url = "https://issues-report.herokuapp.com/issues";
export const setLoading = (isLoading) => {
  return { type: SET_LOADING, payload: isLoading };
};

export const setIssuesList = (list) => {
  return { type: SET_ISSUES_LIST, payload: list };
};

export const addIssueToList = (issue) => (dispatch) => {
  dispatch(setLoading(true));
  withAuth()
    .post(url, issue)
    .then(({ data }) => {
      console.log("Added an issue", data);
      dispatch(setIssuesList(data));
      dispatch(setLoading(false));
    })
    .catch((err) => console.log(err));
};

export const startEditIssue = (issue) => {
  return { type: EDIT_ISSUE, payload: issue };
};

export const editIssue = (issue) => (dispatch) => {
  dispatch(setLoading(true));
  withAuth()
    .put(`url/${issue.id}`, issue)
    .then(({ data }) => {
      dispatch(setIssuesList(data));
      dispatch(setLoading(false));
    })
    .catch((err) => console.log(err));
};

export const deleteIssue = (id) => (dispatch) => {
  dispatch(setLoading(true));
  withAuth()
    .delete(`url/${id}`)
    .then(({ data }) => {
      dispatch(setIssuesList(data));
      dispatch(setLoading(false));
    })
    .catch((err) => console.log(err));
};

export const getIssuesList = () => (dispatch) => {
  withAuth()
    .get(url)
    .then(({ data }) => {
      dispatch(setIssuesList(data));
      dispatch(setLoading(false));
    })
    .catch((err) => console.log(err));
};
