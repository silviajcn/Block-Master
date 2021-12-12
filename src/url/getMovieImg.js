import poster from "../images/poster.png";

export function getMovieImg(path) {
    return path
        ? "https://image.tmdb.org/t/p/w300" + path
        : poster;
}