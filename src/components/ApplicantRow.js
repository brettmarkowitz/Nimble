import React, { Component } from 'react';
import ApplicantStatusIndicator from './ApplicantStatusIndicator.js'
import ApplicantDetailView from './ApplicantDetailView.js'

class ApplicantRow extends Component {
  constructor (props) {
    super(props);
    this.state = {show_detail_view: false};
  }

  showApplicantDetailView = () => {
    this.setState({ show_detail_view: true });
  }

  hideApplicantDetailView = () => {
    this.setState({ show_detail_view: false });
  }

  render() {
    const last_action = this.props.applicant.actions.slice(-1)[0];

    return (
      <tr className="applicant-row" onClick={this.showApplicantDetailView}>
        <td>{this.props.applicant.name}</td>
        <td><ApplicantStatusIndicator status={this.props.applicant.status} /></td>
        <td>{this.props.applicant.applicationDate}</td>
        <td>{last_action.action} <span className="date">({last_action.date})</span></td>
        <td>{this.props.applicant.location}</td>
        <td>High Needs</td>

        <ApplicantDetailView isOpen={this.state.show_detail_view} applicant={this.props.applicant} onClose={this.hideApplicantDetailView} />
      </tr>
    );
  }
}

export default ApplicantRow;
