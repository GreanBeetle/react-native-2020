import { useEffect, useState } from 'react'
import yelp from '../api/yelp'
import COPY from '../copy'

export default (id) => {
  const [results, setResults] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getBusinessAPI = async (ID) => {
    try {
      const response = await yelp.get(`${ID}`)
      setResults(response.data)
    } catch (error) {
      setErrorMessage(COPY.errorMessage + error.messsage)
    }
  }

  useEffect(() => {
    getBusinessAPI(id)
  }, [])

  return [results, errorMessage]
}