import React, { useEffect } from "react";
import { closeMenu } from "../utils/slices/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RightSideContainer } from "./VideoCard";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className="ml-6 mt-2">
      <div className="flex">
        <iframe
          width="950"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="ONLINE CLASSES GONE WRONG"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
