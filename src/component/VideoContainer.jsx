import React, { useEffect, useState } from "react";
import { youtube_api } from "./../utils/YoutubeApi";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideo] = useState([]);
  const getVideoData = async () => {
    try {
      const res = await fetch(youtube_api);
      const json = await res.json();
      setVideo(json.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVideoData();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
