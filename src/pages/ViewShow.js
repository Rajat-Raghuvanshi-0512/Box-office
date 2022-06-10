import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
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
        <section className="text-gray-600  body-font overflow-hidden">
            <div className="container p-5 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-[500px] h-64 object-cover object-center rounded" src={show.image ? show.image.original : `https://dummyimage.com/400x400`} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">SHOW NAME</h2>
                        <h1 className="text-gray-900  text-3xl title-font font-medium mb-1">{show?.name}</h1>
                        <div className="flex mb-4">
                            {
                                show?.rating?.average &&
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">{show.rating.average} Reviews</span>
                                </span>
                            }
                        </div>
                        <div
                            className="leading-relaxed border-b-2 border-gray-100 mb-5 pb-5"
                            dangerouslySetInnerHTML={{ __html: show.summary ? show.summary : "No description available." }} />
                        <div className="flex border-b-2 border-gray-100 mb-5 pb-5">
                            <span className="title-font font-medium text-2xl text-gray-900">{show.status}</span>
                            <button className="ml-auto rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold title-font'>Total Seasons: {show?._embedded?.seasons?.length}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap mx-32 justify-center'>
                {
                    show._embedded?.cast && show._embedded.cast.map(member => (
                        <div key={member.person.id} className="w-1/4  flex flex-col items-center p-6">
                            <img src={member.person.image ? member.person.image.medium : `https://dummyimage.com/400x400`} alt="" className='rounded-full h-20 w-20 object-cover object-top' />
                            <h2 className="text-xl font-semibold text-black  py-4">{member?.person?.name}</h2>
                            <div >
                                <span className='font-semibold'>Character Played:- </span>
                                {member?.character?.name}
                            </div>
                            <div className='py-2'>
                                <span className='font-semibold'>Country-</span>
                                {member?.person?.country?.name}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default ViewShow