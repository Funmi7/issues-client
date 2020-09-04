import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from '../../state/actions/issuesAction';
import Issue from './Issue';
import { withRouter } from "react-router-dom";

const Issues = (props) => {
  const {isLoading, issuesList, getIssuesList} = props;

  useEffect(() => {
    getIssuesList();
    return () => {};
  }, [])



  return isLoading ? (
    <div>
      Loading list of issues
    </div>
  ) : !isLoading? (
    <div>
      <h1>List of issues</h1>
      {
        issuesList ? issuesList.map(issue => <Issue key={issue.id} issue={issue} />) : null
      }
      </div>
  ) : null
};

export default withRouter(connect(state => state, actionCreators)(Issues));
