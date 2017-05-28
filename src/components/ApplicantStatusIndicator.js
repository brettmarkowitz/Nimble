import React, { Component } from 'react';

class ApplicantStatusIndicator extends Component {

  getStatusClass() {
    // convert status like "needs screening" to "needs-screening" for use as a className
    return this.props.status.toLowerCase().replace(' ', '-');
  } 

  render() {
    const status_class = this.getStatusClass();
    return (
      <span className="applicant-status-indicator">
        <span className={`status-indicator ${status_class}`}></span>
        {this.props.status}
      </span>
    );
  }
}

export default ApplicantStatusIndicator;
