import React from 'react';
import {cleanup, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup);

describe('displays if gate is open/closed and if it is locked/unlocked', () => {
    afterEach(cleanup);

    test('displays if gate is open', () => {
        const {getByText} = render(<Display/>);
        const open = getByText(/open/i);
        expect(open).toBeInTheDocument();
    });

    test('displays if gate is closed', () => {
        const {getByText} = render(<Display closed={true}/>);
        const closed = getByText(/closed/i);
        expect(closed).toBeInTheDocument();
    });

    test('displays if gate is locked', () => {
        const {getByText} = render(<Display closed={true} locked={true}/>);
        const locked = getByText(/locked/i);
        expect(locked).toBeInTheDocument();
    });

    test('displays if gate is unlocked', () => {
        const {getByText} = render(<Display/>);
        const unlocked = getByText(/unlocked/i);
        expect(unlocked).toBeInTheDocument();
    });
});

describe('when locked or closed use the red-led class', () => {
    afterEach(cleanup);
    
    test('when closed use the red-led class', () => {
        const {getByText} = render(<Display closed={true}/>);
        const closed = getByText(/closed/i);
        expect(closed).toHaveClass('red-led');
    });

    test('when locked use the red-led class', () => {
        const {getByText} = render(<Display closed={true} locked={true}/>);
        const locked = getByText(/locked/i);
        expect(locked).toHaveClass('red-led');
    });
});