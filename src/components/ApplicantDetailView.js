import React, { Component } from 'react';
import ReactDOM from 'react-dom';  // This is required by the portal because we need to start another React render node
import '../stylesheets/ApplicantDetailView.css';
import ApplicantStatusIndicator from './ApplicantStatusIndicator.js'

class ApplicantDetailView extends Component {
  // creating a portal so view can be appended to body, avoids issue with div being a child of a tr and potential style issues, see https://stackoverflow.com/questions/28802179/how-to-create-a-react-modalwhich-is-append-to-body-with-transitions/28823590#28823590  
  constructor(properties) {
    super(properties);
    this.state = {begin_hide: false} // used for a close animation
  }
  
  render() { return null; } // stop the render tree, starting a new render node in componentDidUpdate()

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
    this.updateBodyScroll();
    ReactDOM.render(
      <div className={`applicant-detail-view-holder ${visible_class}`}>
        {/* Potentially break this into multiple components in the future */}
        <div className="applicant-detail-view">
          <div className="applicant-status-holder"><ApplicantStatusIndicator status={this.props.applicant.status} /></div>
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
                {this.props.applicant.actions.map((action, index) =>
                  <tr key={index}><td>{action.action} <span className="date">({action.date})</span></td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      , this.portalElement
    );
  }

  updateBodyScroll() {
    // this prevents you from being able to scroll the body while the detail view is open
    if (this.props.isOpen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = '';
    }
    
  }

  getVisibleClass() {
    // determine the visible class
    // hidden - view is not open
    // fadeOut - veiw is fading out
    // fadeIn - view is open or animating in
    // ToDO - possibly refactor to encapsulate all of this in state

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
    // fade out the view and when animation is done hide it
    e.preventDefault();
    this.setState({begin_hide: true});
    setTimeout(() => {
      this.setState({begin_hide: false});
      this.props.onClose();
    }, 750);
  }
}

export default ApplicantDetailView;
