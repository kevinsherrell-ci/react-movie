import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const MovieListPage = (props) => {
    const {movieList} = props;
    const [movie, setMovie] = useState({});
    const {Title, Director, Actors, Plot} = movie;
    const {title} = useParams();
    const getMovie = (str, arr) => {
        console.log(str,arr);
        arr.forEach(item => {
            if (item.Title === str) {
                console.log("movie", movie);
                setMovie(item);
            }
        })
    }
    useEffect(() => {
        getMovie(title, movieList);
        console.log(movie);
    })
    return (
        <div className={"movie-list-page"}>
            <h1>Movie Page</h1>
            <h2>{Title}</h2>
            <p>{Director}</p>
            <p>{Actors}</p>
            <p>{Plot}</p>
        </div>
    )
}
export default MovieListPage;