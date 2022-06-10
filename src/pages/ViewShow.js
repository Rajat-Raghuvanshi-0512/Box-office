import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import ShowDetails from '../components/ShowDetails'
import { apiGet } from '../utils/config'

const ViewShow = () => {
    const { id } = useParams()
    const [show, setShow] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        apiGet(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`).then(data => {
            setShow(data)
        })
        setIsLoading(false)
    }, [id])
    console.log(show);
    if (isLoading) {
        return <Loader />
    }
    return (
        <ShowDetails show={show} />
    )
}

export default ViewShow