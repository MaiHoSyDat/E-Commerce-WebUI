import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const saveMessage = createAsyncThunk(
    "message/saveMessage",
    async (message) => {
        const res = await axios.post("http://localhost:8080/messages/save" , message);
        return res.data;
    }
)
export const getAllMessageBySenderIdAndReceiverId = createAsyncThunk(
    "message/getAllMessageBySenderIdAndReceiverId",
    async ([id1,id2]) => {
        const res = await axios.get("http://localhost:8080/messages/" + id1 + "/" + id2);
        console.log([id1, id2])
        return res.data;
    }
)
export const pushMessage = createAsyncThunk(
    "message/pushMessage",
    async (message) => {
        return message;
    }
)