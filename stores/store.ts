import AppState from './app-state';

export {
    AppState,
};

export const createStoreMap = () => ({
    appState: new AppState(),
});
