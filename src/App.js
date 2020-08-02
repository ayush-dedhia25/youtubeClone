import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, Video } from "./components";
import Axios from 'axios';

function App() {
  const [youtubeData, setYoutubeData] = useState([]);
  // const [toggleSideBar, setToggleSideBar] = useState(false);
  const [searchedUser, setSearchedUser] = useState([]);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    const handleYoutubeApiCall = async (event) => {
      await Axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'Snippet',
          q: query,
          maxResults: 10,
          key: process.env.REACT_APP_YOUTUBE_API_KEY
        }
      })
      .then(response => setYoutubeData(response.data.items))
      .catch(err => alert(err));
    };
    handleYoutubeApiCall();
  }, [query]);
 
 const getQueryString = (queryString) => setQuery(queryString);
  
  /*const toggleBar = (event) => {
    toggleSideBar ? setToggleSideBar(false) : setToggleSideBar(true);
  };*/
  
  return (
    <div className="app">
      <Header callBack={toggleBar} getQuery={getQueryString} />
      
      <div className="videos">
        {youtubeData.length !== 0 ? (youtubeData.map(video => (
          <Video
            videoId={video.id.videoId}
            time={video.snippet.publishedAt}
            title={video.snippet.title}
            description={video.snippet.description}
            thumbnail={video.snippet.thumbnails.medium.url}
            channel={video.snippet.channelTitle}
          />
        ))) : null}
      </div>
    </div>
  );
}

export default App;