import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('App renders without crashing', () => {
  render(<App />)
});

test("Nav bar div containing title and dark mode toggle button are rendered", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/nav/i);
})

test("Title h1 is rendered", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/title/i);
})

test("Div containing toggle button is rendered", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/toggleButtonDiv/i);
})

test("Toggle button is rendered", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/toggleButtonItself/i);
})

test("Main container that will be containing all player cards is rendered.", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/allPlayersContainer/i);
})
