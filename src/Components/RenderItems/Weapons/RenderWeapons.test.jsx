import { RenderWeapons } from './RenderWeapons';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { expect } from 'vitest';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const store = mockStore({
  primary: {
    randomizedPrimary: {
      name: null,
      image: null,
    },
  },
  secondary: {
    randomizedSecondary: {
      name: null,
      image: null,
    },
  },
  settings: { randomizeAllTimeout: 0 },
});

test('Weapons component is rendered on page load', async () => {
  render(
    <Provider store={store}>
      <RenderWeapons />
    </Provider>,
  );
  expect(await screen.findByText('No Primary Weapon')).toBeInTheDocument();
  expect(await screen.findByText('No Sidearm')).toBeInTheDocument();
});
