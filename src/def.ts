import { RouteDefinition } from "solid-app-router";

export type BaseRoute = RouteDefinition & {
    name: string;
}