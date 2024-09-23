import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { expect, test } from 'vitest';
import { Wearables } from './Wearables';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const store = mockStore({
  headwear: {
    randomizedHeadwear: {
      name: null,
      image: null,
    },
  },
  headphones: {
    randomizedHeadphones: {
      name: null,
      image: null,
    },
  },
  chestrig: {
    randomizedChestrig: {
      name: null,
      image: null,
    },
  },
  bodyarmor: {
    randomizedBodyarmor: {
      name: null,
      image: null,
    },
  },
  settings: {
    randomizeAllTimeout: null,
  },
});

test('Wearable-item components are rendered', () => {
  render(
    <Provider store={store}>
      <Wearables />
    </Provider>,
  );
  expect(screen.getByText('Headwear')).toBeVisible();
  expect(screen.getByText('Headset')).toBeVisible();
  expect(screen.getByText('Face Cover')).toBeVisible();
  expect(screen.getByText('Backpack')).toBeVisible();
  expect(screen.getByText('Chest Rig')).toBeVisible();
  expect(screen.getByText('Body Armor')).toBeVisible();
});
