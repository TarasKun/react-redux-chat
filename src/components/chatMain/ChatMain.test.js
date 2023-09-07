import React from 'react';
import {render} from '@testing-library/react';
import ChatMain from './ChatMain';
import {initialState} from "../../reducer";
import utils from "./chatUtils";

describe('ChatMain component test', () => {
    const scrollSpy = jest.spyOn(utils, "scrollToElement");

    test('componentDidUpdate calls scrollToElement and joke correctly', () => {
        const {contacts} = initialState;
        const prevContactToUpdate = contacts[1];
        const prevMessages = prevContactToUpdate.messages;
        const contactToUpdate = contacts[1];

        // https://github.com/jsdom/jsdom/issues/1695
        window.HTMLElement.prototype.scrollIntoView = jest.fn();
        const messages = [
            {
                "messageToMe": true,
                "id": 1,
                "date": "23/03/2020",
                "time": "22:27",
                "value": "How can I help?"
            },
            {
                "messageToMe": false,
                "id": 2,
                "date": "5/05/2020",
                "time": "22:28",
                "value": "Guns"
            },
            {
                "messageToMe": false,
                "id": 3,
                "date": "9/6/2023",
                "time": "13:59",
                "value": "s",
                "fromApi": true
            }
        ]
        const updateMessagesHistoryWithApiResult = jest.fn();

        const {rerender} = render(
            <ChatMain
                messages={prevMessages}
                contacts={contacts}
                contactToUpdate={prevContactToUpdate}
                updateMessagesHistoryWithApiResult={updateMessagesHistoryWithApiResult}
            />
        );

        expect(scrollSpy).toHaveBeenCalledTimes(0);

        rerender(
            <ChatMain
                messages={messages}
                contacts={contacts}
                contactToUpdate={contactToUpdate}
                updateMessagesHistoryWithApiResult={updateMessagesHistoryWithApiResult}
            />
        );

        expect(scrollSpy).toHaveBeenCalledTimes(1);
    });
})
