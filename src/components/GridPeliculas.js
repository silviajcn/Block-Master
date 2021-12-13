import React, { useEffect, useState } from 'react';
import CardsPeliculas from './CardsPeliculas';
import get from '../url/httpClient';
import { ContainerCards } from '../styles/Grid.elements';
import Cargando from './Cargando';
import InfiniteScroll from 'react-infinite-scroll-component';
import NoMovie from './NoMovie';
import { CarouselMovies } from './CarouselMovies';

export default function GridPeliculas({search}) {
    //console.log(movies);

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const searchUrl = search
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;
            
        get(searchUrl).then((data) => {
            setMovies(prevMovies => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
        });
    }, [search, page]);

    if (!isLoading && movies.length === 0) {
        return <NoMovie />
    }

    return (
        <div>
        <CarouselMovies />
        <InfiniteScroll dataLength={movies.length} hasMore={hasMore} next={() => setPage((prevPage) => prevPage + 1)}
        loader={<Cargando />}
        >
            <ContainerCards>
                {movies.map((movie) => (
                    <CardsPeliculas key={movie.id} movie={movie} />
                ))}
            </ContainerCards>
        </InfiniteScroll>
        </div>
    )
}
