import { useEffect, useState } from 'react'
import yelp from '../api/yelp'
import COPY from '../copy'

export default (id) => {
  const [business, setBusiness] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const getBusinessAPI = async (ID) => {
    try {
      const response = await yelp.get(`/${ID}`)
      setBusiness(response.data)
    } catch (error) {
      setErrorMessage(COPY.errorMessage + error.messsage)
    }
  }

  useEffect(() => {
    getBusinessAPI(id)
  }, [])

  return [business, errorMessage]
}