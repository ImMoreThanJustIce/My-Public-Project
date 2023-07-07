import { useEffect, useState } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    let ignore = false

    async function fetchUsers() {
      try {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()

        if (!ignore) {
          setData(data)
        }
      } catch (error) {
        if (!ignore) {
          setError(error.message)
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    fetchUsers()

    return () => {
      ignore = true
    }
  }, [url])

  return { data, error, isLoading }
}
