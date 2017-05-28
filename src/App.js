import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './nimble_logo.png';
import './stylesheets/App.css';
import APPLICANTS from './data_v2.json';  // data_v2 is an expanded version of data to make it a litte more interesting

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <a href="/"><img src={logo} className="app-logo" alt="Nimble logo" /></a>
        </div>
        <div className="container">
          <ApplicantTable applicants={APPLICANTS} />
        </div>
      </div>
    );
  }
}

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
    const status_class = this.props.applicant.status && this.props.applicant.status.toLowerCase().replace(' ', '-');
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

class ApplicantDetailView extends Component {
  // creating a portal so view can be appended to body, avoids issue with div being a child of a tr and potential style issues, see https://stackoverflow.com/questions/28802179/how-to-create-a-react-modalwhich-is-append-to-body-with-transitions/28823590#28823590  
  constructor(properties) {
    super(properties);
    this.state = {begin_hide: false}
  }
  
  render() { return null; }

  portalElement = null;

  componentDidMount() {
    const portal_id = 'applicant-detail-view-' + this.props.applicant.id;
    let p = this.props.portal_id && document.getElementById(this.props.portal_id);
    if (!p) {
      p = document.createElement('div');
      p.id = portal_id;
      document.body.appendChild(p);
    }
    this.portalElement = p;
    this.componentDidUpdate();
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalElement);
  }

  componentDidUpdate() {
    const visible_class = this.getVisibleClass();
    const status_class = this.props.applicant.status && this.props.applicant.status.toLowerCase().replace(' ', '-'); //ToDo dry up this line, maybe add data processing in the beginning
    this.updateBodyScroll();
    ReactDOM.render(
      <div className={`applicant-detail-view-holder ${visible_class}`}>
        <div className="applicant-detail-view">
          <div className="applicant-status-holder"><span className={`status-indicator ${status_class}`}></span>{this.props.applicant.status}</div>
          <div className="applicant-info-holder">
            <a href="#" className="close" onClick={this.hide}>X</a>
            <div className="avatar-image-holder"></div>
            <h2 className="applicant-name">{this.props.applicant.name}</h2>
            <div className="applicant-location">{this.props.applicant.location}</div>

            <table className="actions-table">
              <thead>
                <tr><th>Recent Actions</th></tr>
              </thead>
              <tbody>
                <tr><td>-- No Actions --</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      , this.portalElement
    );
  }

  updateBodyScroll() {
    if (this.props.isOpen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
    
  }

  getVisibleClass() {
    let visible_class = 'hidden';
    if (this.state.begin_hide) {
      visible_class = 'fadeOut';
    }
    else if (this.props.isOpen) {
      visible_class = 'fadeIn';
    }
    return visible_class;
  }

  hide = (e) => {
    e.preventDefault();
    this.setState({begin_hide: true});
    setTimeout(() => {
      this.setState({begin_hide: false});
      this.props.onClose();
    }, 750);
  }
}

export default App;
