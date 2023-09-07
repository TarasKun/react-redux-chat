import React from 'react';
import {render, screen} from '@testing-library/react';
import ChatRow from './ChatRow';

describe('ChatRow test', () => {
    const message = {id: 1, value: 'Hello', messageToMe: true, date: '2023-08-31', time: '10:00'};

    test('div has two child elements', () => {
        render(<ChatRow message={message.value}
                        messageToMe={message.messageToMe}
                        date={message.date}
                        time={message.time}/>);

        const chatRow = screen.getByTestId('chat-row');

        expect(chatRow).toHaveTextContent(message.value);
        expect(chatRow).toHaveTextContent(message.date);
        expect(chatRow).toHaveTextContent(message.time);
    });

    test('Message is sent to me', () => {
        const message =
            {id: 1, value: 'Hello', messageToMe: true, date: '2023-08-31', time: '10:00'}
        render(<ChatRow message={message.value}
                        messageToMe={message.messageToMe}
                        date={message.date}
                        time={message.time}/>);

        const messageContainer = screen.getByTestId('message-container');

        expect(messageContainer).toHaveClass('chat-row__to-me')
    });

    test('Message is sent from me', () => {

        render(<ChatRow message={message.value}
                        messageToMe={false}
                        date={message.date}
                        time={message.time}/>);

        const messageContainer = screen.getByTestId('message-container');

        expect(messageContainer).toHaveClass('chat-row__from-me')
    });
})


