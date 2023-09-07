import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ContactRow from './ContactRow';

describe('ContactRow component test', () => {
    test('componentDidUpdate updates lastMessageValue correctly', () => {
        const contact = {
            id: 1,
            fullName: 'John Doe',
            messages: [
                { value: 'Message 1', date: '2023-08-31' },
                { value: 'Message 2', date: '2023-09-01' },
            ],
        };

        const updatedContact = {
            ...contact,
            messages: [
                ...contact.messages,
                { value: 'Message 3', date: '2023-09-02' },
            ],
        };

        const setContactToHeaderRender = jest.fn();

        const { rerender } = render(
            <ContactRow
                contact={contact}
                contacts={[contact]}
                currentContact={1}
                setContactToHeaderRender={setContactToHeaderRender}
            />
        );

        // Assert that lastMessageValue is initially set correctly
        const lastMessageElement = screen.getByText('Message 2');
        expect(lastMessageElement).toBeInTheDocument();

        // Rerender with updated props to trigger componentDidUpdate
        rerender(
            <ContactRow
                contact={updatedContact}
                contacts={[updatedContact]}
                currentContact={1}
                setContactToHeaderRender={setContactToHeaderRender}
            />
        );

        // Assert that setContactToHeaderRender is called when the contact row is clicked
        const contactRow = screen.getByTestId('contact-row');
        fireEvent.click(contactRow);
        expect(setContactToHeaderRender).toHaveBeenCalledWith(1);
    });

    test('lastMessageInContact truncates long messages', () => {
        const longMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        const contact = {
            id: 1,
            fullName: 'John Doe',
            messages: [
                { value: longMessage, date: '2023-08-31' },
            ],
        };

        const { getByText } = render(
            <ContactRow
                contact={contact}
                contacts={[contact]}
                currentContact={null}
                setContactToHeaderRender={() => {}}
            />
        );

        const lastMessageElement = getByText('Lorem ipsum dolor sit amet, consectetur adipis...');
        expect(lastMessageElement).toBeInTheDocument();
    });

    test('getDate returns the date from the last message', () => {
        const contact = {
            id: 1,
            fullName: 'John Doe',
            messages: [
                { value: 'Message 1', date: '2023-08-31' },
                { value: 'Message 2', date: '2023-09-01' },
            ],
        };

        const { getByText } = render(
            <ContactRow
                contact={contact}
                contacts={[contact]}
                currentContact={null}
                setContactToHeaderRender={() => {}}
            />
        );

        const dateElement = getByText('2023-09-01');
        expect(dateElement).toBeInTheDocument();
    });
})
