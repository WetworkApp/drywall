import { SettingsStore } from "../def";

export const exampleSettingsStore: SettingsStore = {
    darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches,
}

export function setupSettingsStore() {
    let fetchedSettingsStore = window.localStorage.getItem("SettingsStore");
    if (!fetchedSettingsStore) {
        window.SettingsStore = exampleSettingsStore;
        window.localStorage.setItem("SettingsStore", JSON.stringify(window.SettingsStore));
    } else {
        window.SettingsStore = { ...exampleSettingsStore, ...JSON.parse(fetchedSettingsStore) };
    }
}

export function setSetting(key: keyof SettingsStore, value: any) {
    window.SettingsStore[key] = value;
    window.localStorage.setItem("SettingsStore", JSON.stringify(window.SettingsStore));
}

export function getSetting(key: keyof SettingsStore) {
    return window.SettingsStore[key];
}