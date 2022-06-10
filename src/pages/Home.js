import React, { useEffect, useReducer, useState } from 'react'
import Search from '../components/Search'
import ShowGrid from '../components/ShowGrid'
import { apiGet } from '../utils/config'
import { reducer } from '../utils/config'

const Home = () => {
    const [selection, setSelection] = useState("shows")
    const [query, setQuery] = useState("")
    const [state, dispatch] = useReducer(reducer, {
        results: [],
        isLoading: false,
        error: null
    })
    const { isLoading, results, error } = state

    const handleClick = async () => {
        try {
            dispatch({ type: "loading" })
            let URL = `https://api.tvmaze.com/search/${selection}?q=${query}`;
            const data = await apiGet(URL)
            dispatch({ type: "success", payload: data })
        } catch (error) {
            dispatch({ type: "error", payload: error.message })
        }
    }
    useEffect(() => {
        const queryHistory = JSON.parse(localStorage.getItem("searchInput"))
        if (queryHistory) {
            setQuery(queryHistory)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("searchInput", JSON.stringify(query))
        localStorage.setItem("results", JSON.stringify(results))
    }, [query, results])

    return (
        <>
            <Search
                setSelection={setSelection}
                handleClick={handleClick}
                input={query}
                setInput={setQuery}
            />
            <ShowGrid results={results} isLoading={isLoading} error={error} />
        </>

    )
}

export default Home