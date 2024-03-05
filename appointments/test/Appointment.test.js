/**
 **Jest Testing Structures:**

* **Test Suite:**
    * Defined using the `describe` function.
    * Takes two arguments:
        * **Name of the test suite (string)**
        * **Callback function containing the tests**
* **Test:**
    * Defined using the `it` function.
    * Takes two arguments:
        * **Name of the test (string)**
        * **Callback function defining the test logic**
* **Assertions:**
    * Use the `expect` function to make assertions about the test results.
    * Takes a received value and a matcher function.
    * Matcher function compares the received value with the expected value.
    * Jest provides built-in matchers and allows creating custom one
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from '../component/appointment';

describe('Appointment', () => {
  let customer = {};
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) =>
    ReactDOM.render(component, container);

  it('renders the customer first name', () => {
    customer.firstName = 'Ashley';

    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer first name', () => {
    customer.firstName = 'Jordan';

    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('Jordan');
  });

  it('renders another customer first name', () => {
    customer.firstName = 'feisal';

    render(<Appointment customer={customer} />);
    expect(container.textContent).toMatch('feisal');
  });
});
