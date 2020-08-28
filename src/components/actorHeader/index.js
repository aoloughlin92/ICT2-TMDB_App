import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const ActorHeader =({actor}) =>{
	return(
		<div className="row">
			<div className="col-6 offset-3">
				<h2>
					{actor.name}
				</h2>
			</div>
		</div>
					
	);
};

export default ActorHeader;