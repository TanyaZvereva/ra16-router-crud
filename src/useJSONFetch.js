import {useState, useEffect} from "react";

export const useJsonFetch = (url, opts, cb) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    fetch(url, opts)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => setError(err.message))
      .finally(() => {
        setIsLoading(false)
        cb()
    } )
  }, [])

  return [data, isLoading, error]
}

export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const requestData = async (url, opts, cb)=>{
        return await fetch(url, opts)
        .then(response => response.json())
        .then(data => data)
        .catch(err => setError(err.message))
        .finally(() => {
          setIsLoading(false)
          cb()
      } )

    }
  
    return [requestData, isLoading, error]
  }