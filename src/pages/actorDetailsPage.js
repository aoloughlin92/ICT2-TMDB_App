import React, {useState,useEffect} from "react";
import ActorHeader from "../components/actorHeader";
import ActorDetails from "../components/actorDetails";
import ActorMovies from "../components/actorMovies";
import "./actorPage.css";
import {getActorMovies} from '../api/tmdb-api';
import useActor from "../hooks/useActor";

const ActorPage =  props => {
  const { id } = props.match.params;
  const [actor]= useActor(id);


  const [movies, setMovies] = useState([]);
   useEffect(() => {
		getActorMovies(id).then(movies => {
        setMovies(movies);
      });
   }, []);

  return (
    <>
      {actor ? (
        <>
          <ActorHeader actor={actor} />
          <div className="row">
            <div className="col-3">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : "./film-poster-placeholder.png"
                }
                className="actor"
                alt={actor.name}
              />
            </div>
            <div className="col-9">
              <ActorDetails actor={actor} />
            </div>
          </div><br/>
		  <div className="row bg-info">
			<div className="col-12">
				<h2 className="text-white">
					Movies Starring {actor.name}:
				</h2>
			</div>
		</div>
		  <ActorMovies movies={movies} />
        </>
        ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorPage;