import { useState, useEffect } from 'react'

const API_URL = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

function useFetchRestaurants(restaurantId) {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Falha ao carregar o restaurants')
        }
        const data = await response.json()
        setRestaurants(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { restaurants, loading, error }
}

export default useFetchRestaurants
