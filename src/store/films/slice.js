import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    film: {
        title: "Драйв",
        description: "Описание фильма",
        actors: ["Актер 1", "Актер 2"],
        genres: ["Жанр 1", "Жанр 2"],
        rating: "12/10"
    }
};

const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        addFilm(state, action) {
            state.films.push(action.payload);
        },
        removeFilm(state, action) {
            state.films.splice(state.films.indexOf(action.payload), 1);
        },
        updateFilm(state, action) {
            const index = state.films.findIndex(film => film.id === action.payload);
            if (index !== -1) {
                state.films[index] = action.payload;
            }
        }
    }
});

export const { addFilm, removeFilm, updateFilm } = filmsSlice.actions;

export default filmsSlice.reducer;