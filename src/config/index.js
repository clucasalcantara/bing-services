import {
    RESULTS_COUNT,
    SAFE_SEARCH,
} from "./constants"

const getDefaultConfig = (term) => {
    const properties = {
        safeSearch: SAFE_SEARCH,
        mkt: "en-us",
        count: RESULTS_COUNT,
    }

    const params = { term, ...properties }

    return params
}

export default getDefaultConfig

