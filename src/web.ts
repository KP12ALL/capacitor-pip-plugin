import {WebPlugin} from '@capacitor/core';

import type {PipPlugin} from './definitions';

export class PipWeb extends WebPlugin implements PipPlugin {
  async enable(): Promise<{ value: string }> {
    const message = {value: 'Not implemented on web'};
    console.log('PIP', message);
    return message;
  }

  async disable(): Promise<{ value: string }> {
    const message = {value: 'Not implemented on web'};
    console.log('PIP', message);
    return message;
  }
}
