export function systemMatchMedia() {

}

export const extractObject = (spec: object, keys?: string[]) => {
    if (!keys.length || !keys) {
        return spec;
    }
    return keys.reduce((a: object, b: string) => {
        if (spec[b]) a[b] = spec[b];
        return a;
    }, {});
};