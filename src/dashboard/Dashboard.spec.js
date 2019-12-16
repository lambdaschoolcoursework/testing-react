import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('dashboard', () => {
    test('defaults to unlocked', () => {
        const {getByText} = render(<Dashboard/>);
        expect(getByText('Unlocked')).toBeInTheDocument();
    });
    test('defaults to open', () => {
        const {getByText} = render(<Dashboard/>);
        expect(getByText('Open')).toBeInTheDocument();
    });
});