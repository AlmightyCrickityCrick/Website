import React from "react";

import "./Trailer.css";

function Trailer(props) {
  return (
    <div>
      <div className="trailer-title">Trailer</div>
      <iframe
        title="trailer-video"
        width="1000"
        height="720"
        src={"https://www.youtube.com/embed/" + props.trailerID}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
}

export default Trailer;
