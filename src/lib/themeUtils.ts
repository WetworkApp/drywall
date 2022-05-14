export function setTheme(dark: boolean) {
    let root = document.getElementById("root");
    if (dark) {
        root?.classList.add("dark");
    } else {
        root?.classList.remove("dark");
    }
}