import React from 'react';
import { useQuery } from '../hooks/useQuery';
import { useDebounce } from '../hooks/useDebounce';
import GridPeliculas from './GridPeliculas';
import { CarouselMovies } from './CarouselMovies';

export default function Home() {

    const query = useQuery();
    const search = query.get("search");
    //console.log(search);

    const debouncedSearch = useDebounce(search, 300);

    return (
        <div>
            <CarouselMovies />
            <GridPeliculas key={debouncedSearch} search={debouncedSearch}/>
        </div>
    )
}