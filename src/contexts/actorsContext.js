import React, { useState, useEffect, createContext } from "react";
import { getActors } from "../api/tmdb-api";

export const ActorsContext = createContext(null)

const ActorsContextProvider = props => {
	const [actors, setActors] = useState([]);
	useEffect(() => {
		getActors().then(actors => {
			  setActors(actors);
		  });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ActorsContext.Provider
          value={{
            actors
          }}
        >
          {props.children}
        </ActorsContext.Provider>    
    )
}

export default ActorsContextProvider;