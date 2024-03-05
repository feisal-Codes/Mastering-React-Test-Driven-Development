import React from 'react';

import Bookings from '../component/bookings';
import ReactDom from 'react-dom';

describe('Bookings', () => {
  let container;
  let booking = {};
  //this function runs befre each test is run for individual tests
  beforeEach(() => {
    container = document.createElement('div');
  });

  //takes in react component and renders it
  const render = (component) =>
    ReactDom.render(component, container);

  it('renders the first booking id ', () => {
    booking.id = '1';
    render(<Bookings booking={booking} />);
    expect(container.textContent).toMatch('1');
  });

  it('renders the second booking id', () => {
    booking.id = '2';
    render(<Bookings booking={booking} />);
    expect(container.textContent).toMatch('2');
  });

  it('renders the third booking id', () => {
    booking.id = '3';
    render(<Bookings booking={booking} />);
    expect(container.textContent).toMatch('3');
  });
});
