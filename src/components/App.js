import React, { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import useVideos from '../hooks/useVideos'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('animal planet')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <Searchbar onFormSubmit={search} />
      <div className="ui grid">
        <div className="row">
          <div className="eleven wide column">
            <VideoPlayer video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
