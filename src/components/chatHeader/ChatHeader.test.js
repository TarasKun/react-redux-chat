import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatHeader from './ChatHeader';

describe('ChatHeader Component', () => {
    test('displays user name', () => {
        const fullName = 'John Doe';
        render(<ChatHeader fullName={fullName} photoNumber={1} />);

        const nameElement = screen.getByText(fullName);
        expect(nameElement).toBeInTheDocument();
    });

    test('displays user photo', () => {
        const photoNumber = 1;
        render(<ChatHeader fullName="John Doe" photoNumber={photoNumber} />);

        const avatarElement = screen.getByTestId('avatar');
        expect(avatarElement).toBeInTheDocument();

        const avatarImg = screen.getByRole('img', { class: 'MuiAvatar-img' });
        expect(avatarImg).toHaveAttribute('src', `${photoNumber}.jpg`);
        expect(avatarImg).toBeInTheDocument();
    });

    test('does not display anything when fullName is missing', () => {
        render(<ChatHeader fullName={null} photoNumber={1} />);

        const nameElement = screen.queryByText(/.+/); // queryByText should return null since the name is missing
        expect(nameElement).not.toBeInTheDocument();

        const avatarElement = screen.queryByAltText('User Avatar'); // queryByAltText should also return null
        expect(avatarElement).not.toBeInTheDocument();
    });
});
