import React from 'react'
import ActorCard from './Cards/ActorCard';
import Card from './Cards/ShowCard';
import Loader from './Loader/Loader';

const ShowGrid = ({ results, isLoading, error }) => {
  if (isLoading) return <Loader />
  if (error) return <div className='text-center mt-32'>{error}</div>
  return (
    <div className="flex flex-wrap sm:px-10 md:px-32">
      {
        results.length > 0 && results.map((result) => {
          if (result.show) {
            const { show } = result;
            return <Card
              key={show?.id}
              name={show?.name}
              image={show?.image?.medium}
              rating={show?.rating?.average}
              summary={show?.summary}
              id={show?.id}
            />
          }
          else {
            const { person } = result;
            return <ActorCard
              key={person?.id}
              id={person?.id}
              name={person?.name}
              image={person?.image?.medium}
              birthday={person?.birthday}
              isDead={person?.deathday}
              gender={person?.gender}
            />
          }
        })
      }
    </div>
  )
}

export default ShowGrid