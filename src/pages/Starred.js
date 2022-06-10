import React from 'react'
import ShowGrid from '../components/ShowGrid'
import { useShow, useShows } from '../utils/custom-hooks'

const Starred = () => {
    const [starredShows] = useShows()
    console.log(starredShows);

    const { results, isLoading, error } = useShow(starredShows)

    if (starredShows.length === 0) {
        return <div className='text-center mt-10'>Please like some shows to show here.</div>
    }
    return (
        <ShowGrid results={results} isLoading={isLoading} error={error} />
    )
}

export default Starred