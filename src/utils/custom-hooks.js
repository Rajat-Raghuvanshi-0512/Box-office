import { useEffect, useReducer, useState } from "react"
import { apiGet } from "./config";

export function showsReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload]

        case "REMOVE":
            return state.filter(id => id !== action.payload)

        default:
            return state;
    }
}

export const usePersistedHook = (reducer, initialState, key) => {

    const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
        const localData = localStorage.getItem(key)
        return localData ? JSON.parse(localData) : initial
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    return [state, dispatch];
}
export const useShows = () => {
    return usePersistedHook(showsReducer, [], "starred")
}

export const useLastQuery = () => {
    const [query, setQuery] = useState(() => {
        const queryHistory = JSON.parse(sessionStorage.getItem("searchInput"))
        return queryHistory ? queryHistory : ""
    })
    const setPersistedQuery = (newState) => {
        setQuery(newState);
        sessionStorage.setItem("searchInput", JSON.stringify(newState))
    }
    return [query, setPersistedQuery];
}

export const useShow = (state) => {
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

    return { isLoading, results, error }

}