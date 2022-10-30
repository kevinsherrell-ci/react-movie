import MovieSidebar from "../Components/MovieSidebar";
import {Outlet} from "react-router-dom";

const MovieLayout = (props) => {
    const {movieList} = props;
    return (
        <div className={"movie-layout"}>
            <MovieSidebar movieList={movieList}/>
            <div className={"movie-content"}>
                <Outlet/>
            </div>
        </div>
    )
}
export default MovieLayout;