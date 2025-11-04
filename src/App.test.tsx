import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App component', () => {
  test('renders heading', () => {
    render(<App />);
    expect(screen.getByText(/this is a technical proof/i)).toBeInTheDocument();
  });

  test('add button is clickable', async () => {
    render(<App />);
    const button = screen.getByText(/add/i);
    await userEvent.click(button);
    expect(button).toBeInTheDocument(); 
  }); 

  test('delete button is clickable', async () => {
    render(<App />);
    const button = screen.getByText(/delete/i);
    await userEvent.click(button);
    expect(button).toBeInTheDocument(); 
  });

  test('undo button is clickable', async () => {
    render(<App />);
    const button = screen.getByText(/⟲/i);
    await userEvent.click(button);
    expect(button).toBeInTheDocument(); 
  });
});
