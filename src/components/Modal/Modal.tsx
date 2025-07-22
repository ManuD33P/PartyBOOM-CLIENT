import {  type ReactNode } from "react";
import { useModalContext } from "./context/UseModalContext";
import { createPortal } from "react-dom";
import Style from './modal.module.css'



export const TitleComponent = ({children} : {children: ReactNode})=>{
  
    const {setState} = useModalContext();

  return (<nav className={Style.contentNav}>
        <p>{children}</p>        
        <button className={Style.closeButtom} onClick={()=> setState(false)}>X</button>
    </nav>)
}


interface IModal {
    title:string,
    children: ReactNode,
}
export function Modal({title, children}:IModal){
    // const modalRef = useRef<HTMLDivElement>(null);
    const {state} = useModalContext();

    const modalRoot = document.getElementById("modal");
  

    if(!modalRoot || !state){
        return null;
    }
    
    return createPortal(
        <section className={Style.overlay}>
            <article className={Style.content}>
            <TitleComponent>
                {title}
            </TitleComponent>
            {children}
            </article>
        </section>
    ,modalRoot);
}


