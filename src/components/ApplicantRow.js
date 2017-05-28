import React, { Component } from 'react';
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

  getStatusClass() {
    // convert status like "needs screening" to "needs-screening" for use as a className
    return this.props.applicant.status && this.props.applicant.status.toLowerCase().replace(' ', '-');
  } 

  render() {
    const status_class = this.getStatusClass();
    return (
      <tr className="applicant-row" onClick={this.showApplicantDetailView}>
        <td>{this.props.applicant.name}</td>
        <td><span className={`status-indicator ${status_class}`}></span>{this.props.applicant.status}</td>
        <td>{this.props.applicant.applicationDate}</td>
        <td>No Action</td>
        <td>{this.props.applicant.location}</td>
        <td>High Needs</td>

        <ApplicantDetailView isOpen={this.state.show_detail_view} applicant={this.props.applicant} onClose={this.hideApplicantDetailView} />
      </tr>
    );
  }
}

export default ApplicantRow;
