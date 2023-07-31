import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favriotelength: 0,
  favrioteproperty: [],
};

const Favrioteproperties = createSlice({
    name: "Fvarioteproperties",
    initialState,
    reducers: {
        addfavrioteProperty(state, action) {
            const isExist = state.favrioteproperty.some(
                (item) => item === action.payload
            );
            if (!isExist) {
                state.favriotelength++;
                state.favrioteproperty.push(action.payload);
            } else {
                console.log("coming")
                state.favriotelength--;
                state.favrioteproperty = state.favrioteproperty.filter(
                    (item) => item !== action.payload
                );
            }
        },
    },

    // addfavriotelength: (state, action) => {
    //     state.favriotelength++;
    // },
    // addfavrioteproperty: (state, action) => {

    // }
  },
);

export const { addfavrioteProperty } = Favrioteproperties.actions;

export default Favrioteproperties.reducer;
