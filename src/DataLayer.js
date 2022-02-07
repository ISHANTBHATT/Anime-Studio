import React, {createContext, useContext , useReducer} from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ reducer , initialState, children }) => (
<DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</DataLayerContext.Provider>
);

//children is data that is wrapping in Datalayer component which is <App /> index.js
export const useDataLayerValue = () => useContext(DataLayerContext);