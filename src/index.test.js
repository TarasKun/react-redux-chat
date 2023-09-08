import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {getByTestId, render, screen} from '@testing-library/react';
import AppLayout from './components/AppLayout/AppLayout';
import { reducer } from './store/reducer';
import React from 'react';

describe('index.js test', () => {
    test('renders the AppLayout component with Redux store', () => {
        const store = createStore(reducer);
        render(
            <Provider store={store}>
                <AppLayout />
            </Provider>
        );

        const chat = screen.getByTestId('chat');
        expect(chat).toBeInTheDocument();
    });
})
