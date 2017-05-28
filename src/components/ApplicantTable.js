import React, { Component } from 'react';
import ApplicantRow from './ApplicantRow.js'
import '../stylesheets/ApplicantTable.css';

class ApplicantTable extends Component {
  render() {
    return (
      <table className="applicant-table">
        <thead>
          <tr>
            <th>Applicant</th>
            <th>Status</th>
            <th>Application Date</th>
            <th>Last Action</th>
            <th>Location</th>
            <th>High Needs</th>
          </tr>
        </thead>
        <tbody>
          {this.props.applicants.map((applicant) =>
            <ApplicantRow key={applicant.id} applicant={applicant} />
          )}
        </tbody>
      </table>
    );
  }
}

export default ApplicantTable;
