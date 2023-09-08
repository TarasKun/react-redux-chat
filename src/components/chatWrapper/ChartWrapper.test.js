import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ChatWrapper from './ChatWrapper';
import {initialState} from "../../store/reducer";

const mockStore = configureStore()
const store = mockStore(initialState)

describe('ChatWrapper test', () => {
    test('displays header, main and sendMessage components', () => {
        render(
            <Provider store={store}>
                <ChatWrapper />
            </Provider>
        );

        const chatHeaderElement = screen.getByTestId('ChatHeader');
        expect(chatHeaderElement).toBeInTheDocument();

        const chatMain = screen.getByTestId('chat-main');
        expect(chatMain).toBeInTheDocument();

        const sendMessageContainer = screen.getByTestId('sendMessageContainer');
        expect(sendMessageContainer).toBeInTheDocument();
    });

    test('displays header after chosen chat', () => {
        const storeWithoutCurrentContact = mockStore({
            contacts: [
                { id: 1, fullName: 'John Doe', messages: [] },
                { id: 2, fullName: 'Jane Smith', messages: [] },
            ],
            currentContact: 2,
        });

        render(
            <Provider store={storeWithoutCurrentContact}>
                <ChatWrapper />
            </Provider>
        );

        const chatHeaderElement = screen.getByTestId('ChatHeader');
        expect(chatHeaderElement).toBeInTheDocument();

        const fullName = screen.getByText('Jane Smith');
        expect(fullName).toBeInTheDocument();

        const photoElement = screen.getByTestId('avatar');
        expect(photoElement).toBeInTheDocument();
    });

    test('displays SendMessageContainer with stand-by className when currentContact is not set', () => {
        render(
            <Provider store={store}>
                <ChatWrapper />
            </Provider>
        );

        const sendMessageInputElement = screen.getByTestId('sendMessageInput');
        expect(sendMessageInputElement).toBeInTheDocument();
        expect(sendMessageInputElement).toHaveClass('send-message__input_stand-by');
    });

    test('displays SendMessageContainer with active className when currentContact is not set', () => {
        const storeWithoutCurrentContact = mockStore({
            contacts: [
                { id: 1, fullName: 'John Doe', messages: [] },
                { id: 2, fullName: 'Jane Smith', messages: [] },
            ],
            currentContact: 2,
        });

        render(
            <Provider store={storeWithoutCurrentContact}>
                <ChatWrapper />
            </Provider>
        );

        const sendMessageContainerElement = screen.getByTestId('sendMessageInput');

        expect(sendMessageContainerElement).toBeInTheDocument();
        expect(sendMessageContainerElement).toHaveClass('send-message__input_active');
    });
})
