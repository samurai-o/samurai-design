export function systemMatchMedia() {

}

export const extractObject = (spec: object, keys: string[]) => {
    return keys.reduce((a: object, b: string) => {
        if (spec[b]) a[b] = spec[b];
        return a;
    }, {});
};