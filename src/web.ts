import {WebPlugin} from '@capacitor/core';

import type {PipPlugin} from './definitions';

export class PipWeb extends WebPlugin implements PipPlugin {
  async enable(): Promise<{ value: string }> {
    return {value: 'Not implemented on web'};
  }

  async disable(): Promise<{ value: string }> {
    return {value: 'Not implemented on web'};
  }
}
