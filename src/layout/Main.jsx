import React from "react"
import { Movies } from '../Components/Movies'
import { Preloader } from "../Components/Preloader";
import { Search } from "./Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        this.movieSearching();
    }

    movieSearching = (str = 'matrix', type = 'all') => {
        const search = str === '' ? 'matrix' : str;
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${type !== 'all' ? `&type=${type}`: ''}&page=1 `)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }


    render() {
        const {movies} = this.state;
        const content = movies !== undefined && movies.length ? <Movies movies={this.state.movies}/> : null;
        const loading =  movies !== undefined && !movies.length ? <Preloader/> : null;
        const empty = movies === undefined ? 'Nothing found' : null;

        return <main className="content container">
                <div className="row">
                    <h1>Films</h1>
                    <Search movieSearching={this.movieSearching}/>
                    {loading}
                    {content}
                    {empty}
                </div>
            </main>
        

    }
}