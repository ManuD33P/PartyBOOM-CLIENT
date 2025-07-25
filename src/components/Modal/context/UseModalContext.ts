import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export function useModalContext(){
    const context = useContext(ModalContext);

    if(!context){
        throw new Error("Modal error");
    }

    return context;
}