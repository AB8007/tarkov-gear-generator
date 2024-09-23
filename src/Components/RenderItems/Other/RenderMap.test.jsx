import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { RenderMap } from './RenderMap';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';

const mockStore = createMockStore({});
const store = mockStore({
  settings: {
    randomizeAllTimeout: 0,
  },
  map: {
    randomMap: {
      name: null,
      image: null,
    },
  },
});

test('Map component is rendered', async () => {
  render(
    <Provider store={store}>
      <RenderMap />
    </Provider>,
  );
  expect(await screen.findByText('No Location')).toBeInTheDocument();
});
