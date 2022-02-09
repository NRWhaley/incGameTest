import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import Like from "./common/like"
import { paginate } from "../utils/paginate";



class Movies extends Component {
    state = {
        movies: getMovies(),
        currentPage: 1,
        pageSize: 4
    }

    handleDeletion = (movie) => {
     const movies = this.state.movies.filter(m => m._id !== movie._id)
     this.setState({ movies })
    } 

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleLike = (movie) => {
        console.log('liked')
        let movies = [...this.state.movies]
        let index = movies.indexOf(movie);
        movies[index] = {...movies[index] }
        movies[index].liked = !movies[index].liked;
        this.setState([movies])
    }

  /*  renderMovies(){
        if (this.state.movies.length === 0) {
            return 'No movies in list!'
        }
        return (
        <ul>{this.state.movies.map(movie => <li>Movie: {movie.title}  Genre: {movie.genre.name} Rental rate: {movie.dailyRentalRate} <button onClick={this.handleDeletion(movie)}>Delete</button> </li>)}</ul>
        )} */

    render(){
        const { length: count} = this.state.movies;
        const { pageSize, currentPage, movies: allMovies} = this.state;

        if(count === 0){
            return (
               <div>
                    <h1>There are no movies in the list!</h1>
                </div>
            )
        }

        const movies = paginate(allMovies, currentPage, pageSize)

        return (
           <div> 
            <h1>There are {count} movies in this list</h1>
          <table className="table">
              <thead>
                  <tr>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Stock</th>
                      <th>Rate</th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {movies.map(movie => (
                      <tr key={movie._id}>
                   <td>{movie.title}</td>
                   <td>{movie.genre.name}</td>
                   <td>{movie.numberInStock}</td>
                   <td>{movie.dailyRentalRate}</td>
                   <td><Like  liked={movie.liked} onClick={() => this.handleLike(movie)} /></td>
                   <td><button onClick={() => this.handleDeletion(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                  </tr>
                  ))}
                
              </tbody>
          </table>
          <Pagination 
          itemsCount={count} 
          pageSize={pageSize} 
          currentPage={currentPage}
          onPageChange={this.handlePageChange} 
          />
          </div>
        )}



}

export default Movies;