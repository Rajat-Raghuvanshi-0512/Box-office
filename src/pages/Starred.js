import React, { useEffect, useState } from 'react'
import ShowGrid from '../components/ShowGrid'
import { apiGet } from '../utils/config'
import { useShows } from '../utils/custom-hooks'

const Starred = () => {
    const [state] = useShows()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [results, setResults] = useState([])

    useEffect(() => {
        if (state?.length > 0) {
            const data = state.map(id => {
                return apiGet(`https://api.tvmaze.com/shows/${id}`)
            })
            Promise.all(data)
                .then(apiData => apiData.map(show => ({ show })))
                .then(res => {
                    setResults(res)
                    setIsLoading(false)
                    console.log(res);
                })
                .catch(err => setError(err.message))
        }
    }, [state, setError, setIsLoading, setResults])

    return (
        <ShowGrid results={results} isLoading={isLoading} error={error} />
    )
}

export default Starred