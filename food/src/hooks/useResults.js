import { useEffect, useState } from 'react'
import yelp from '../api/yelp'
import COPY from '../copy'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchAPI = async (searchTerm) => {
    console.log('searching yelp ...') 
    try {
      const response = await yelp.get(`/search`, {
        params: {
          limit: 50,
          term: searchTerm,
          latitude: 45.5051,
          longitude: -122.6750
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage(COPY.errorMessage + error.message)
    }
  }

  useEffect(() => {
    searchAPI(COPY.initialSearch)
  }, [])

  return [searchAPI, results, errorMessage] // beautiful!  
}