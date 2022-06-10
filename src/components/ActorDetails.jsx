import React from 'react'

const ActorDetails = ({ actor }) => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container p-5 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={actor?.image?.original ? actor?.image?.original : "https://dummyimage.com/400x400"} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase pb-4">About Actor</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-10">{actor?.name}</h1>
                        <div>
                            <p className='my-3 text-lg font-bold'>{actor.gender}</p>
                            <p className='my-3 text-lg'>
                                <span className="font-semibold">Birthday: - </span>
                                {actor.birthday ? actor.birthday : "Not available"}
                            </p>
                            <p className='my-3 text-lg'>
                                <span className="font-semibold">Deathday: - </span>
                                {actor.deathday ? actor.deathday : "Not available"}
                            </p>
                            <p className='my-3 text-lg'>
                                <span className="font-semibold">Country: - </span>
                                {actor.country.name ? actor.country.name : "Not available"}
                            </p>
                        </div>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ActorDetails