import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(cleanup);

test('gate defaults to unlocked and open', () => {
    const {getByText} = render(<Dashboard/>);
    expect(getByText(/unlocked/i)).toBeInTheDocument();
    expect(getByText(/open/i)).toBeInTheDocument();
});

test('gate cannot be closed or opened if it is locked', () => {
    const {getByText} = render(<Dashboard/>);

    // querying the correct buttons and checking to see if it was successful
    const closeGateButton = getByText(/close gate/i);
    expect(closeGateButton).toBeInTheDocument();

    const lockGateButton = getByText(/lock gate/i);
    expect(lockGateButton).toBeInTheDocument();
    
    // clicking both queried buttons in order
    fireEvent.click(closeGateButton);
    fireEvent.click(lockGateButton);

    // checking if open gate button is disabled now that buttons are clicked
    const openGateButton = getByText(/open gate/i);
    expect(openGateButton).toBeDisabled();
});

test('dashboard component shows the controls and display', () => {
    const tree = render(<Dashboard/>);
    expect(tree.asFragment()).toMatchSnapshot();
});