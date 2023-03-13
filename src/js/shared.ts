export interface Settings {
  seconds: boolean,
  theme: string,
  theming: boolean,
}

export enum AppEvent {
  SETTINGS = 'settingsUpdated',
}
