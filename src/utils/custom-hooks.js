import { useEffect, useReducer } from "react"

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
