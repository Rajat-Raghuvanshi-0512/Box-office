export const apiGet = async (URL) => {
    const res = await fetch(URL)
    const data = await res.json()
    return data;
}

export function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return {
                ...state, isLoading: true
            };
        case "success":
            return {
                ...state, isLoading: false, results: action.payload
            };
        case "error":
            return {
                ...state, isLoading: false, error: action.payload
            }
        default:
            return state;
    }
}