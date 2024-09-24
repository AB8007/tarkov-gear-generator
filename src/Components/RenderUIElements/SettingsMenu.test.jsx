import { render, screen, within } from '@testing-library/react';
import { SettingsMenu } from './SettingsMenu';
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
      <SettingsMenu />
    </Provider>,
  );
  const settingsContainer = screen.getAllByTestId('settingCheckbox');
  const headsetCompatibilitySetting = within(settingsContainer[0]);
  const armorCompatibilitySetting = within(settingsContainer[1]);

  expect(
    headsetCompatibilitySetting.getByText('Force headset compatibility'),
  ).toBeVisible();
  expect(headsetCompatibilitySetting.getByRole('checkbox')).toBeVisible();

  expect(
    armorCompatibilitySetting.getByText('Force armor and rig combination'),
  ).toBeVisible();
  expect(armorCompatibilitySetting.getByRole('checkbox')).toBeVisible();

  expect(await screen.findByTestId('randomizationButton')).toBeVisible();
});
