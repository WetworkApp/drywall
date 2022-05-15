import { createSignal, createEffect, Accessor, Setter } from "solid-js";
import { SettingsStore } from "../def";
import { getSetting, setSetting } from "./settingsStore";

export function createReactiveSetting(name: keyof SettingsStore): [Accessor<any>, Setter<any>] {
    const [sig, setSig] = createSignal(getSetting(name));
    createEffect(() => setSetting(name, sig()));
    return [sig, setSig];
}