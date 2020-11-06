import axios from 'axios'
/* 
  create and import an instance of axios 
  so that code is reusable
  the full endpoint for searching businesses is 
    https://api.yelp.com/v3/businesses/search
  the full endpoint for searching business details is
    https://api.yelp.com/v3/businesses/{id}

  example usage
  import yelp from './yelp' 
  yelp.get('./search')
*/
console.log('PROCESS.ENV.EXPO_YELP_API_KEY', process.env.EXPO_YELP_API_KEY) // REMOVE
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer '
  }
})

