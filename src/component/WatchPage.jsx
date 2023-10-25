import React, { useEffect } from "react";
import { closeMenu } from "../utils/slices/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  useEffect(() => {
    window.scrollTo(0, `0`);
  }, []);
  return (
    <div className="flex flex-col">
      <div className=" px-4 flex ">
        <div>
        <iframe
          width="920"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="ONLINE CLASSES GONE WRONG"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        </div>
        <div className="w-full m-0">
          <LiveChat />
        </div>
        <div>
        </div>
      </div>
      <div>
        <CommentsContainer/>
      </div>
    </div>
  );
};

export default WatchPage;
