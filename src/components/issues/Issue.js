import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../state/actions/issuesAction";

export const Issue = ({ issue }) => {
  return (
    <div>
      <div>Title of Issue: {issue.title}</div>
      <div>Description: {issue.description}</div>
      <div>Location: {issue.location}</div>
      <div>Added on: {issue.date}</div>
    </div>
  );
};

export default withRouter(connect(state=> state, actionCreators)(Issue));