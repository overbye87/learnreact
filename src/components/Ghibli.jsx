import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Ghibli = function () {
  const [res, setRes] = useState(<div />);
  const [films, setFilms] = useState(0);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((films) => {
        //console.log(json);
        //console.log(films);
        let res = films.map(function (film) {
          return (
            <div className="col-md-4 gy-4" key={film.id}>
              <div className="card border-primary h-100">
                <div className="card-header bg-primary text-light">
                  <div className="card-title">
                    <h2>{film.title}</h2>
                    <img
                      className="rounded float-start me-3"
                      src={film.image}
                      height="200px"
                    />
                    <h5 className="">Director: {film.director}</h5>
                    <h5>Producer: {film.producer}</h5>
                    <h3>Release Date: {film.release_date}</h3>
                  </div>
                </div>
                <div className="card-body" data-id="${film.id}">
                  <div className="card-text">{film.description}</div>
                </div>
              </div>
            </div>
          );
        });
        setFilms(films);
        setRes(res);
      });
  }, []);
  //console.log(films);
  return (
    <div id="films">
      <div className="container">
        <h2 className="text-center mt-4">Heroku Films</h2>
        <div className="row">{res}</div>
      </div>
    </div>
  );
};
export default Ghibli;
