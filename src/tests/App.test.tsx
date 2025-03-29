import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('Home page', () => {
  it('renders the default Next.js starter message', () => {
    render(<HomePage />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });
});
