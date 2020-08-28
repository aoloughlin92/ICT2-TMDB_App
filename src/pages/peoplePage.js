import React, {useContext, useState } from "react";
import ActorsHeader from "../components/headerActorList";
import ActorList from "../components/actorList";
import ActorFilterControls from "../components/actorFilterControls";
//import {getActors} from '../api/tmdb-api'
import {ActorsContext} from "../contexts/actorsContext";

const ActorListPage = () =>{
	const [ titleFilter, setTitleFilter] = useState("");
	const context = useContext(ActorsContext);

	//Filtering Block

	const actors = context.actors;

	let displayedActors =actors.filter(m=>{
			return m.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
		});
		

	const handleFilterChange = (value) => {
		setTitleFilter(value);
	};




	return(
		<> 
			<ActorsHeader numActors={displayedActors.length} />
			<ActorFilterControls onUserInput={handleFilterChange} />
			<ActorList actors = {displayedActors} />
		</>
	);
};

export default ActorListPage;