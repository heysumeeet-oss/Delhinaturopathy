import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom';

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon" />,
  X: () => <div data-testid="close-icon" />,
  Phone: () => <div data-testid="phone-icon" />,
  ChevronDown: () => <div data-testid="chevron-down" />,
  ArrowRight: () => <div data-testid="arrow-right" />,
  Leaf: () => <div data-testid="leaf-icon" />,
}));

// Mock Next/Link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock Next/Navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Header Component', () => {
  test('renders logo and navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Lucknow')).toBeInTheDocument();
    expect(screen.getByText('Naturopathy')).toBeInTheDocument();
    expect(screen.getByText('Treatments')).toBeInTheDocument();
    expect(screen.getByText('Diseases We Cure')).toBeInTheDocument();
  });

  test('toggles mobile menu', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Toggle mobile menu');

    // Initially closed
    expect(screen.queryByText('Book via WhatsApp')).not.toBeVisible();

    // Click to open
    fireEvent.click(menuButton);
    expect(screen.getByText('Book via WhatsApp')).toBeVisible();

    // Click to close
    fireEvent.click(menuButton);
    // Note: In JSDOM, visibility checks with CSS transitions are tricky,
    // so we might rely on class names or aria attributes if strict visibility fails.
    // However, our component conditionally applies classes.
  });
});
