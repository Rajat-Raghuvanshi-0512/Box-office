import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ActorDetails from '../components/ActorDetails'
import { apiGet } from '../utils/config'

const ViewActor = () => {
    const { id } = useParams()
    const [actor, setActor] = useState({})
    useEffect(() => {
        apiGet(`https://api.tvmaze.com/people/${id}`).then(data => {
            setActor(data)
        })
    }, [id])

    return (
        <ActorDetails actor={actor} />
    )
}

export default ViewActor