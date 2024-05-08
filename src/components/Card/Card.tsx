import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHourglass } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {Link} from "@tanstack/react-router";

interface CardProps {
    id: string,
    title: string,
    poster: string,
    description: string,
    actors: string[],
    genres: string[],
    rating: number,
    film?: unknown
}

export default function Card({id, title, poster, description, actors, genres, rating}: CardProps) {
    return (
        <div
            className='p-8 text-center lg:mr-2 max-lg: mb-2 grid transition duration-1000 hover:shadow-2xl rounded-3xl bg-deep-purple-black text-neutral-50 '>
            <img className='justify-self-center' src={poster} alt={title}/>
            <div className='flex flex-col'>
                <div className='flex justify-center py-2'>
                    <Link to={`/films/${id}`}>
                        <div className='text-4xl mr-4'>{title}</div>
                    </Link>
                    <div className='text-4xl bg-dark-green'>{rating}</div>
                </div>
                <div className='text-neutral-400 pb-2'>{description}</div>
                <div className='pb-2'>Актёры:
                    <div className='text-neutral-400'>
                        {actors ? actors.join(", ") : "Нет данных"}
                    </div>
                </div>
                <div className='pb-2'>Жанры:
                    <div className='text-neutral-400'>
                        {genres ? genres.join(", ") : "Нет данных"}
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='transition duration-500 p-4 border-2 border-red-600 hover:bg-red-600 rounded-l-full w-full'>
                    <FontAwesomeIcon icon={faHeart}/>
                </div>
                <div className='transition duration-500 p-4 border-2 border-yellow-600 hover:bg-yellow-600 rounded-r-full w-full'>
                    <FontAwesomeIcon icon={faHourglass}/>
                </div>
            </div>
        </div>
    );
}

