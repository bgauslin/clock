export const STORAGE_ITEM = 'clock';

export enum Events {
  Settings = 'settingsUpdated',
  Touchend = 'touchend',
  Touchstart = 'touchstart',
}

export interface Settings {
  seconds: boolean,
  theme: string,
  theming: boolean,
}
