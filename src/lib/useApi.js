import axios from "axios"

const API_ENDPOINT = "http://nyx.vima.ekt.gr:3000/api"

export const fetchBooks = async (searchOptions) => {
  try {
    const timerStart = Date.now()
    const response = await axios
      .post(`${API_ENDPOINT}/books`, searchOptions, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((res) => {
        return res.data
      })
    return {
      response,
      timerStart,
      error: false
    }
  } catch (error) {
    return {
      response: error,
      error: true
    }
  }
}
