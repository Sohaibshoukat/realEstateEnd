import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyword: "",
    status: "",
    propertyType: "",
    affordability: "",
    location: "",
    price: {
        min: 0,
        max: 0,
    },
    LDA:false,
    company:"",
    FBR:false,
    category:"",
    view3D:false,
    furnishing:"",
    view:"",
    floor:"",
    area_type:"",
    developer:"",
    amenities: [],
    bathrooms: "",
    bedrooms: "",
    garages: "",
    yearBuilt: "",
    area: {
        min: "",
        max: "",
    },
    length: 0,
};

export const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
        addKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        addPropertyType: (state, action) => {
            state.propertyType = action.payload;
        },
        addaffordability: (state, action) => {
            state.affordability = action.payload;
        },
        addLocation: (state, action) => {
            state.location = action.payload;
        },
        addPrice: (state, action) => {
            state.price.max = action.payload.max;
            state.price.min = action.payload.min;
        },
        addPriceMax: (state, action) => {
            state.price.max = action.payload;
        },
        addPriceMin: (state, action) => {
            state.price.min = action.payload;
        },
        addAmenities: (state, action) => {
            const isExist = state.amenities.some(
                (item) => item === action.payload
            );
            if (!isExist) {
                state.amenities.push(action.payload);
            } else {
                state.amenities = state.amenities.filter(
                    (item) => item !== action.payload
                );
            }
        },
        resetAmenities: (state, action) => {
            state.amenities = [];
        },
        addStatus: (state, action) => {
            state.status = action.payload;
        },
        addfloor:(state,action)=>{
            state.status = action.payload;
        },
        addLDA:(state,action)=>{
            state.LDA = action.payload;
        },
        addFBR:(state,action)=>{
            state.FBR = action.payload;
        },
        addArea:(state,action)=>{
            state.area_type = action.payload;
        },
        addCompany:(state,action)=>{
            state.company = action.payload;
        },
        addView:(state,action)=>{
            state.view = action.payload;
        },
        addDeveloper:(state,action)=>{
            state.developer = action.payload;
        },
        addview3D:(state,action)=>{
            state.view3D = action.payload;
        },
        addfurnishing:(state,action)=>{
            state.furnishing= action.payload;
        },
        addcategory:(state,action)=>{
            state.category=action.payload
        },
        addBathrooms: (state, action) => {
            state.bathrooms = action.payload;
        },
        addBedrooms: (state, action) => {
            state.bedrooms = action.payload;
        },
        addGarages: (state, action) => {
            state.garages = action.payload;
        },
        addYearBuilt: (state, action) => {
            state.yearBuilt = action.payload;
        },
        addAreaMin: (state, action) => {
            state.area.min = action.payload;
        },
        addAreaMax: (state, action) => {
            state.area.max = action.payload;
        },
        addLength: (state, action) => {
            state.length = action.payload;
        },
    },
});

export const {
    addKeyword,
    addPropertyType,
    addaffordability,
    addLocation,
    addPrice,
    addPriceMax,
    addPriceMin,
    addAmenities,
    addStatus,
    addBathrooms,
    addBedrooms,
    addFBR,
    addcategory,
    addLDA,
    addView,
    addArea,
    addview3D,
    addGarages,
    addYearBuilt,
    addAreaMin,
    addAreaMax,
    addfurnishing,
    addDeveloper,
    addCompany,
    addLength,
    addfloor,
    resetAmenities,
} = propertiesSlice.actions;
export default propertiesSlice.reducer;
