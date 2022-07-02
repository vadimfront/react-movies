// @flow
import * as React from "react";

export class Search extends React.Component {
  state = {
    serach: "",
    type: 'all'
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.movieSearching(this.state.serach, this.state.type);
    }
  };
  hendleFilter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}), () => {
        this.props.movieSearching(this.state.serach, this.state.type);
    })
  }

  render() {
    return (
        <>
            <div className="search">
            <div className="input-field">
                <input
                placeholder="serach"
                type="search"
                className="validate"
                value={this.state.search}
                onChange={(e) => this.setState({ serach: e.target.value })}
                onKeyDown={this.handleKey}
                />
            </div>
            <button
                className="btn"
                onClick={() => this.props.movieSearching(this.state.serach)}
            >
                Search
            </button>
            </div>
            <div className="filters">
            <label>
                <input
                className="with-gap"
                data-type="all"
                name="all"
                type="radio"
                onChange={this.hendleFilter}
                checked={this.state.type === 'all'}
                />
                <span>all</span>
            </label>
            <label>
                <input
                className="with-gap"
                data-type="movie"
                name="movie"
                type="radio"
                onChange={this.hendleFilter}
                checked={this.state.type === 'movie'}
                />
                <span>movie</span>
            </label>
            <label>
                <input
                className="with-gap"
                data-type="series"
                name="series"
                type="radio"
                onChange={this.hendleFilter}
                checked={this.state.type === 'series'}
                />
                <span>series</span>
            </label>
            </div>
        </>
    );
  }
}
