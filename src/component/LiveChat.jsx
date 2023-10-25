import React, { useEffect } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatmessage } from "../utils/slices/chatSlices";
import { GenerateName } from "../helper/NameHelper";
import { generateString } from "../helper/Stringgenerator";

const LiveChat = () => {
  const dispatch = useDispatch();
  const getChatdata = useSelector((state) => state.chat.messages);
  useEffect(() => {
    const LiveChatLogic = setInterval(() => {
      dispatch(
        addChatmessage({
          name: GenerateName(),
          message: generateString(10),
        })
      );
    }, 2000);

    return () => {
      clearInterval(LiveChatLogic);
    };
  }, []);
  return (
    <div className="p-1 m-1 w-full h-[450px] overflow-x-hidden  border border-blacks rounded-lg bg-slate-200 overflow-y-scroll flex flex-col-reverse">
      {getChatdata.map((val, i) => (
        <div key={i}>
          <Chatmessage val={val} />
        </div>
      ))}
    </div>
  );
};

export default LiveChat;
