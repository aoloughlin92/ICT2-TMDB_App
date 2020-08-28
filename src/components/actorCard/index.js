import React from "react";
import "./actorCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import { Link } from "react-router-dom";

const ActorCard = props => {
	return(
		<div className="col-sm-2">
			<div className="card bg-white">
			  <Link to = {`/actors/${props.actor.id}`}>
				<img
					className="img-fluid"
					alt={props.actor.name}
					src={
						props.actor.profile_path
						? `https://image.tmdb.org/t/p/w500/${props.actor.profile_path}`
					  : "./film-poster-placeholder.png"
					}
				/>
				</Link>
				<div className="card-body">
					<h4 className="card-title ">{props.actor.name}</h4>
					<p>
					<FontAwesomeIcon icon={["fas", "star"]} />
					<span> {props.actor.popularity}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ActorCard;