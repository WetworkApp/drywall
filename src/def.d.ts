import { RouteDefinition } from "solid-app-router";

export type BaseRoute = RouteDefinition & {
    name: string;
}

export type Message = {
    content: string;
    author: User;
    timestamp: number;
}

export type User = {
    username: string;
}

export interface SettingsStore {
    darkMode: boolean;
}

declare global {
    interface Window { SettingsStore: SettingsStore; }
}