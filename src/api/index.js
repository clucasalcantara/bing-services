import axios from "axios"

import getDefaultConfig from "../config"
import { DEFAULT_ENDPOINT, API_KEY } from "../config/constants"

const searchBingImages = (term) => {
    const params = getDefaultConfig(term)

    axios.get(DEFAULT_ENDPOINT, {
        headers: { "Ocp-Apim-Subscription-Key": API_KEY },
        params,
    })
}

export default searchBingImages
