import { createSlice } from "@reduxjs/toolkit";
import { Live_chat_Count } from './../YoutubeApi';

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatmessage: (state, action) => {
      // remove one element after 10
      state.messages.splice(Live_chat_Count,1);
      state.messages.unshift(action.payload);
    },
  },
});
export  const {addChatmessage} =ChatSlice.actions;
export default ChatSlice.reducer;
