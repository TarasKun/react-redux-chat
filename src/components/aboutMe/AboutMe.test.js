import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('AboutMe component test', () => {
    test('Shows users name', () => {
        const fullName = 'John Doe';
        render(<AboutMe fullName={fullName} />);

        const nameElement = screen.getByText(fullName);
        expect(nameElement).toBeInTheDocument();
    });

    test('Shows search field', () => {
        render(<AboutMe fullName="John Doe" filterContacts={() => {}} />);

        const searchFieldElement = screen.getByPlaceholderText('Search or start new chat');
        expect(searchFieldElement).toBeInTheDocument();
    });
})

