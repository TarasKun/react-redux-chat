import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
    test('renders input component with search icon when show prop is false', () => {
        render(<Input className="test-input" placeHolder="Search" show={false}/>);

        const inputElement = screen.getByPlaceholderText('Search');
        expect(inputElement).toBeInTheDocument();

        const searchIconElement = screen.getByTestId('search-icon');
        expect(searchIconElement).toBeInTheDocument();
        expect(searchIconElement).toHaveClass('test-input__search-icon')
        expect(searchIconElement).toHaveStyle('border: none;')
    });

    test('renders input component with send icon when show prop is true', () => {
        render(<Input className="test-input" placeHolder="Type a message" show={true}/>);

        const inputElement = screen.getByPlaceholderText('Type a message');
        expect(inputElement).toBeInTheDocument();

        const sendIconElement = screen.getByTestId('send-icon');
        expect(sendIconElement).toBeInTheDocument();
    });

    test('calls sendMessage when send icon is clicked', () => {
        const sendMessage = jest.fn();
        render(<Input className="test-input" placeHolder="Type a message" show={true} sendMessage={sendMessage}/>);

        const inputElement = screen.getByPlaceholderText('Type a message');
        fireEvent.change(inputElement, {target: {value: 'Hello'}});

        const sendIconElement = screen.getByTestId('send-icon');
        fireEvent.click(sendIconElement);

        expect(sendMessage).toHaveBeenCalledWith('Hello');
    });
});
