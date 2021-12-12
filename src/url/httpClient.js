const API = "http://api.themoviedb.org/3";

export default function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI2NGIzMDdmMzBjOTRkOTM5YTdmY2M1NmRiNTQwZSIsInN1YiI6IjYxNzllMTljYzE0ZmVlMDA0M2M1OTViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CbkbFqNLhr4_veNkm4Gc6JkUAewvrdsjPVuJ1bFFGiM",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then(result => result.json());
}
