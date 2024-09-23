import { expect, test } from 'vitest';
import { RenderSmallItem } from './RenderSmallItem';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureMockStore();

const store = mockStore({
  settings: { randomizeAllTimeout: 0 },
});

test('Small item component is rendered', async () => {
  const category = 'Mock item';
  render(
    <Provider store={store}>
      <RenderSmallItem category={category} />
    </Provider>,
  );
  expect(await screen.findByText(`No ${category}`)).toBeVisible();
});
