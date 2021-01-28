import React from "react";

const videoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoURL = `https://youtube.com/embed/${video.id.videoId}`

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe title="video player" src={videoURL}></iframe>
      </div>
      <div className="ui header">{video.snippet.title}</div>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default videoPlayer;
