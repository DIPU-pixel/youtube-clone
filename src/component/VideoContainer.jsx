import React, { useEffect, useState } from "react";
import { youtube_api } from "./../utils/YoutubeApi";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";

const VideoContainer = () => {
  const [videos, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const getVideoData = async () => {
    try {
      const res = await fetch(youtube_api);
      const json = await res.json();
      setVideo(json.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVideoData();
  }, []);
  // const shimmerEffcetsMap = videos?.map((val) => val);
  // console.log(shimmerEffcetsMap);
  return (
    <div className="flex flex-wrap">
      {
      loading.length <1
        ? Array(10)
            .fill(10)
            .map((_, index) => (
              <div>
                <Shimmer videos={videos} key={index} />
              </div>
            ))
        : 
        videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard videos={video} />
            </Link>
          ))}
    </div>
  );
};

export default VideoContainer;
