import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

export const getData = async () => {
    try {
      const response = await axios.get(API_URL)
      console.log(response.data)
    } catch (error) {
      console.error('Error getting the data:', error)
    }
}
