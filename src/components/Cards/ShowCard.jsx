import React from 'react'
import { Link } from 'react-router-dom'
import { useShows } from '../../utils/custom-hooks'

const Card = ({ name, summary, image, rating, id }) => {
    const [show, dispatch] = useShows();
    const saveShow = () => {
        if (show.includes(id)) {
            dispatch({ type: "REMOVE", payload: id })
        } else {
            dispatch({ type: "ADD", payload: id })
        }
    }
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white bg-opacity-80">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image ? image : `https://dummyimage.com/720x400`} alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Show</h2>
                    <div className='flex justify-between mb-3'>
                        <h1 className="title-font text-lg font-medium text-gray-900">{name}</h1>
                        <button onClick={saveShow}>
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={`w-6 h-6 drop-shadow-2xl ${show.includes(id) ? "text-red-500" : "text-gray-300"}`} viewBox="0 0 24 24">
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="leading-relaxed mb-3"
                        dangerouslySetInnerHTML={{ __html: summary ? summary.slice(0, 100).toString() + "..." : "No description available." }} />
                    <div className="flex items-center flex-wrap ">
                        <Link to={`/show/${id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        {
                            rating &&
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1">
                                {rating}
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card