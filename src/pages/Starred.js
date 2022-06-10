import React from 'react'
import ShowGrid from '../components/ShowGrid'
import { useShow, useShows } from '../utils/custom-hooks'

const Starred = () => {
    const [starredShows] = useShows()
    const { results, isLoading, error } = useShow(starredShows)

    return (
        <ShowGrid results={results} isLoading={isLoading} error={error} />
    )
}

export default Starred