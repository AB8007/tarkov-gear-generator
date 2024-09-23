import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Titlebar } from './Titlebar';
import { BrowserRouter } from 'react-router-dom';

test('Links are rendered in Title Bar', () => {
  render(
    <BrowserRouter>
      <Titlebar />
    </BrowserRouter>,
  );
  expect(screen.getByTestId('homeLink')).toBeVisible();
  expect(screen.getByTestId('infoLink')).toBeVisible();
});
