import { useState, useEffect } from 'react'

const API_BASE_URL = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
function useFetchPrato(restaurantId) {
  const [restaurant, setRestaurant] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!restaurantId) {
      setLoading(false)
      setError('ID do restaurante não encontrado.')
      return
    }

    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(`${API_BASE_URL}/${restaurantId}`)

        if (!response.ok) {
          throw new Error(
            `Falha ao carregar o restaurante ${restaurantId}: ${response.statusText}`
          )
        }

        const data = await response.json()
        setRestaurant(data)
      } catch (err) {
        console.error('Erro ao carregar detalhes do restaurante:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [restaurantId])

  return { restaurant, loading, error }
}

export default useFetchPrato
