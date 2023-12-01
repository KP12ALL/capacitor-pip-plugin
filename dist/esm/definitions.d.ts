import { PluginListenerHandle } from '@capacitor/core';
export interface PipState {
    isInPictureInPictureMode: boolean;
}
export declare type PipModeChangeListener = (state: PipState) => void;
export interface PipPlugin {
    enable(): Promise<{
        value: string;
    }>;
    disable(): Promise<{
        value: string;
    }>;
    addListener(eventName: 'pipModeChange', listenerFunc: PipModeChangeListener): Promise<PluginListenerHandle> & PluginListenerHandle;
}
