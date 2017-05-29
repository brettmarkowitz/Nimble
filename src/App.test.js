import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let div;
const body = document.body;

beforeEach(() => {
  div = document.createElement('div');
  body.appendChild(div);
  ReactDOM.render(<App />, div);
});

afterEach(() =>{
  body.removeChild(div);
  body.innerHTML = '';
});

it('renders without crashing', () => {
});

it('renders a table of applicants', () => {
  expect(body.getElementsByClassName('applicant-table').length).toEqual(1);
});

it('renders applicant rows', () => {
  //TODO refactor this to not rely on a known count for number of applicants
  const num_sample_applicants = 10;
  expect(body.getElementsByClassName('applicant-row').length).toEqual(num_sample_applicants);
});

it('renders a visible applicant details view when an applicant row is clicked', () => {
  //TODO refactor this to not rely on the first applicant row corresponding to the first applicant detail view holder

  expect(body.getElementsByClassName('applicant-detail-view-holder')[0].className.indexOf('hidden') !== -1).toEqual(true);
  body.getElementsByClassName('applicant-row')[0].click();
  expect(body.getElementsByClassName('applicant-detail-view-holder')[0].className.indexOf('hidden') !== -1).toEqual(false);
});

it('clicking the close button on an applicant detail view hides the applicant detail view', () => {
  //TODO refactor this to not rely on the first applicant row corresponding to the first applicant detail view holder
  body.getElementsByClassName('applicant-row')[0].click();
  expect(body.getElementsByClassName('applicant-detail-view-holder')[0].className.indexOf('hidden') !== -1).toEqual(false);
  expect(body.getElementsByClassName('applicant-detail-view-holder')[0].className.indexOf('fadeOut') !== -1).toEqual(false);
  body.getElementsByClassName('applicant-detail-view-holder')[0].getElementsByClassName('close')[0].click();
  setTimeout()
  expect(body.getElementsByClassName('applicant-detail-view-holder')[0].className.indexOf('fadeOut') !== -1).toEqual(true);
});
