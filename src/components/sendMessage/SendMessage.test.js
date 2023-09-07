import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import SendMessage from './SendMessage';

describe('sendMessage component test', () => {
    test('renders SendMessage component with input', () => {
        const contacts = [
            {id: 1, fullName: 'John Doe', messages: []},
            {id: 2, fullName: 'Jane Smith', messages: []},
        ];
        const updateMessagesHistory = jest.fn();

        render(
            <SendMessage
                contacts={contacts}
                contactToUpdate={contacts[0]}
                className="_active"
                updateMessagesHistory={updateMessagesHistory}
            />
        );

        const sendMessageContainerElement = screen.getByTestId('sendMessageContainer');
        expect(sendMessageContainerElement).toBeInTheDocument();

        const sendMessageInputElement = screen.getByTestId('sendMessageInput');
        expect(sendMessageInputElement).toBeInTheDocument();
    });

    test('calls updateMessagesHistory when Enter key is pressed with a non-empty message', () => {
        const contacts = [
            {id: 1, fullName: 'John Doe', messages: []},
            {id: 2, fullName: 'Jane Smith', messages: []},
        ];
        const updateMessagesHistory = jest.fn();

        render(
            <SendMessage
                contacts={contacts}
                contactToUpdate={contacts[0]}
                className="_active"
                updateMessagesHistory={updateMessagesHistory}
            />
        );

        const sendMessageInputElement = screen.getByPlaceholderText('Type your message')
        fireEvent.change(sendMessageInputElement, {target: {value: 'Hello'}});

        fireEvent.keyUp(sendMessageInputElement, {keyCode: 13}); // Simulate Enter key press

        expect(updateMessagesHistory).toHaveBeenCalledWith({
            id: 1,
            fullName: 'John Doe',
            messages: expect.arrayContaining([
                expect.objectContaining({
                    messageToMe: false,
                    date: expect.any(String),
                    time: expect.any(String),
                    value: 'Hello',
                    fromApi: true,
                }),
            ]),
        });
    });

    test('does not call updateMessagesHistory when Enter key is pressed with an empty message', () => {
        const contacts = [
            {id: 1, fullName: 'John Doe', messages: []},
            {id: 2, fullName: 'Jane Smith', messages: []},
        ];
        const updateMessagesHistory = jest.fn();

        render(
            <SendMessage
                contacts={contacts}
                contactToUpdate={contacts[0]}
                className="_active"
                updateMessagesHistory={updateMessagesHistory}
            />
        );

        const sendMessageInputElement = screen.getByPlaceholderText('Type your message')
        fireEvent.change(sendMessageInputElement, {target: {value: ' '}});

        fireEvent.keyUp(sendMessageInputElement, {keyCode: 13}); // Simulate Enter key press

        expect(updateMessagesHistory).not.toHaveBeenCalled();
    });
})
