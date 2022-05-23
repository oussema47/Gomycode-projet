import { ADDMOVIE, EDITMOVIE, WATCHED } from "./types";


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