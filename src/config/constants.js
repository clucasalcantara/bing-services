const DEFAULT_ENDPOINT = "https://api.cognitive.microsoft.com/bing/v5.0/images/search"
const API_KEY = process.env.BING_API_KEY
const RESULTS_COUNT = process.env.RESULTS_COUNT
const SAFE_SEARCH = process.env.SAFE_SEARCH

export {
    API_KEY,
    RESULTS_COUNT,
    SAFE_SEARCH,
}
