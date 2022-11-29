import {WebPlugin} from '@capacitor/core';
import type {PipPlugin} from './definitions';

export declare class PipWeb extends WebPlugin implements PipPlugin {
    enable(): Promise<{
        value: string;
    }>;
    disable(): Promise<{
        value: string;
    }>;
}
