export interface JSONResult {
    framework: string, benchmark: string, type: string, min: number,
        max: number, mean: number, geometricMean: number,
        standardDeviation: number, median: number, values: Array<number>
}

export let config = {
    REPEAT_RUN: 20,
    DROP_WORST_RUN: 0,
    WARMUP_COUNT: 5,
    TIMEOUT: 60 * 1000,
    LOG_PROGRESS: true,
    LOG_DETAILS: false,
    LOG_DEBUG: false,
    EXIT_ON_ERROR: false
}

export interface FrameworkData {
    name: string;
    uri: string;
    keyed: boolean;
    useShadowRoot: boolean;
}

interface Options {
    uri: string;
    useShadowRoot? : boolean;
}

function f(name: string, keyed: boolean, options: Options = {uri: null, useShadowRoot: false}): FrameworkData {
    let ret = {name, keyed, uri: options.uri ? options.uri : name, useShadowRoot: options.useShadowRoot};
    return ret;
}

export let frameworks = [
    f("angular-v1.6.3-keyed", true),
    f("angular-v4.3.3-keyed", true),
    f("angular-v4.3.3-no-zone-keyed", true),
    f("angular-v4.3.3-non-keyed", false),

    f("elm-v0.18.0-keyed", true),

    f("halogen-v2.1.0-non-keyed", false),

    f("miso-non-official-v0.4.0.0-non-keyed", false),

    f("preact-v7.1.0-keyed", true),

    f("pux-v11.0.0-non-keyed", true),

    f("react-lite-v0.15.30-keyed", true),
    f("react-v15.5.4-keyed", true),
    f("react-v15.5.4-non-keyed", false),
    f("react-v15.5.4-easy-state-v1.0.3-keyed", true),
    f("react-v15.5.4-mobX-v3.1.9-keyed", true),
    f("react-v15.5.4-redux-v3.6.0-keyed", true),
    f("react-v16.beta2-keyed", true),

    f("reflex-dom-v0.4-keyed", true, {uri: "reflex-dom-v0.4-keyed/dist"}),

    f("thermite-v4.0.0-non-keyed", true),

    f("vanillajs-non-keyed", false),
    f("vanillajs-keyed", true),
]
