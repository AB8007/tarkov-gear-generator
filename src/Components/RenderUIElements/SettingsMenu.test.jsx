import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { expect, test } from 'vitest';
const mockStore = configureMockStore();

const store = mockStore({
  settings: {
    randomizeAllTimeout: null,
    forceHeadsetsFit: false,
    forceArmoredRigsOut: false,
  },
});

test('Settings menu is rendered', async () => {
  render(
    <Provider store={store}>
      <Menu />
    </Provider>,
  );

  expect(await screen.findByTestId('randomizationButton')).toBeVisible();
});
