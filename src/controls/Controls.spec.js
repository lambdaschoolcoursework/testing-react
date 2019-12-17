import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(cleanup);

describe('provide buttons to toggle the closed and locked states', () => {
    afterEach(cleanup);
    
    test('provide button to toggle the closed state', () => {
        const {getByText} = render(<Controls/>);
        const closeGateButton = getByText(/close gate/i);
        expect(closeGateButton).toBeInTheDocument();
    });

    test('provide button to toggle the locked state', () => {
        const {getByText} = render(<Controls/>);
        const lockGateButton = getByText(/lock gate/i);
        expect(lockGateButton).toBeInTheDocument();
    });
});

test('buttons text changes to reflect the state the door will be in if clicked', () => {
    const toggleClosed = jest.fn();
    
    const {getByText} = render(<Controls toggleClosed={toggleClosed}/>);
    const closeGateButton = getByText(/close gate/i);
    
    fireEvent.click(closeGateButton);
    
    expect(toggleClosed).toBeCalled();
    // won't register fire event, well... it will, but it wont rerender dom so that i can query new button
});

test('the locked toggle button is disabled if the gate is open', () => {
    const {getByText} = render(<Controls/>);
    const lockGateButton = getByText(/lock gate/i);
    expect(lockGateButton).toBeDisabled();
});

test('the closed toggle button is disabled if the gate is locked', () => {
    const {getByText} = render(<Controls locked={true} closed={true}/>);
    const openGateButton  = getByText(/open gate/i);
    expect(openGateButton).toBeDisabled();
});