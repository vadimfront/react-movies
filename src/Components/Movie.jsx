export function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Poster: poster
    } = props;

    return <div id={id} className="card movie">
                    <div className="card-image">
                        {
                            poster === 'N/A' ?
                            <img src={`https://via.placeholder.com/266x400?text=${title}`} alt={title}/> :
                            <img src={poster}  alt={title}/> 
                        }
                    </div>
                    <div className="card-content">
                        <p>{year}<span className="card-title">{title}</span></p>
                    </div>
                </div>
          

}