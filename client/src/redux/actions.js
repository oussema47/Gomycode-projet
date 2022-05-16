import { ADDMOVIE, EDITMOVIE, WATCHED } from "./types";
import axios from "axios";
export const addmovie = (payload) => {
    return {
        type: ADDMOVIE,
        payload,
    };
};

export const watched = (payload) => {
    return {
        type: WATCHED,
        payload,
    };
};

export const editmovie = (id, editeddata) => {
    return {
        type: EDITMOVIE,
        id,
        editeddata,
    };
};
export const Register =(data) => async (dispatch) => {
    try {
        const res = await axios.post("/users/Register", data);
     dispatch({type:Register, payload : res.data})
    } catch (error) {
        dispatch({type:FAIL, payload: error.response.data })
    }
};