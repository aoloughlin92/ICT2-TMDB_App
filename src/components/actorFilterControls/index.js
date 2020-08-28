import React from "react";
import "./actorFilterControls.css";


const ActorFilterControls = props => {


  const handleChange = (e, value) => {
    e.preventDefault();
    props.onUserInput(value);
  };

  const handleTextChange = e => {
    handleChange(e, e.target.value);
  };

   return (
      <div className="row bg-warning">
        <div className="col-md-12">
          <h4>
            <span>List Filtering:</span>
            <input
              type="text"
              placeholder="Actor Search"
			  onChange={handleTextChange}
            />
		  </h4>
        </div>
	  </div>
   );
};

export default ActorFilterControls;