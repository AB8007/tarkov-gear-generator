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
  expect(screen.getByText('headWear')).toBeVisible();
  expect(screen.getByText('headPhones')).toBeVisible();
  expect(screen.getByText('facecover')).toBeVisible();
  expect(screen.getByText('backpack')).toBeVisible();
  expect(screen.getByText('chestRig')).toBeVisible();
  expect(screen.getByText('bodyArmor')).toBeVisible();
});
