import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./slice.js";
import filmsData from "../../data/filmsData.json"

export const store = configureStore({
    reducer: {
        films: filmsReducer
    },
    preloadedState: {
        films: {
            films: filmsData,
            status: 'idle'
        }
    }
});