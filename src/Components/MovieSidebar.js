import {Link} from "react-router-dom";

const MovieSidebar = (props)=>{
    const {movieList} = props;
    return (
        <div className={'movie-sidebar'}>
            <h2>Movie Sidebar</h2>
            {movieList.map((movie)=>{
                console.log(movie)
                return <Link to={`/movies/${movie.Title}`}>{movie.Title}</Link>
            })}
        </div>
    )
}
export default MovieSidebar;