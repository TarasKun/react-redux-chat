import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import LeftBar from './LeftBar';
import configureStore from "redux-mock-store";
import {initialState} from "../../store/reducer";
import {Provider} from "react-redux";

const mockStore = configureStore()
const store = mockStore(initialState)

describe('LeftBar Component', () => {
    test('displays AboutMe and ContactContainer components', () => {
        render(
            <Provider store={store}>
                <LeftBar contacts={initialState.contacts} fullName={initialState.fullName} />
            </Provider>)


        const aboutMeElement = screen.getByTestId('about-me');
        expect(aboutMeElement).toBeInTheDocument();

        const contactContainerElement = screen.getByTestId('contact-container');
        expect(contactContainerElement).toBeInTheDocument();
    });

    test('filters contacts in ContactContainer based on input value', () => {
        render(
            <Provider store={store}>
                <LeftBar contacts={initialState.contacts} fullName={initialState.fullName} />
            </Provider>)

        const inputElement = screen.getByPlaceholderText('Search or start new chat');
        fireEvent.change(inputElement, {target: {value: 'Jane'}});

        const filteredContactElement = screen.queryByText('John Doe');
        expect(filteredContactElement).not.toBeInTheDocument();

        const visibleContactElement = screen.getByText('Josephina');
        expect(visibleContactElement).toBeInTheDocument();
    });
});
