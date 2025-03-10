import { createContext, useContext } from "react";

export const TextContext = new createContext( {
    color:"" , funcs:{}
}); //The type is empty string