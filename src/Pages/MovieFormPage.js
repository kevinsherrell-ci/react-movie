import {useState} from "react";

const MovieFormPage = (props)=>{
    console.log(props);
    const {handleAddMovie} = props;
    const [title, setTitle] = useState("");
    return (
        <div className={'movie-form'}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }}/>
            <button onClick={()=>handleAddMovie(title)}>Add Movie</button>
        </div>
    )
}
export default MovieFormPage;