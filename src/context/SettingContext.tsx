import { createContext, type ReactNode ,type Dispatch, type SetStateAction, useState, useContext } from "react"; 


interface IConfigUser {
    name:string,
    roomId: string,
}

interface ISettingContext{
    state: IConfigUser,
    setState: Dispatch<SetStateAction<IConfigUser>>
}

const settingContext = createContext<ISettingContext>({
    state: {
        name:"",
        roomId:""
    },
    setState: ()=> {}
});


export function SettingProvider({children} : {children: ReactNode}){
    const [state, setState] = useState({
        name: "",
        roomId: "",
      });

    return(
        <settingContext.Provider value={{state, setState}}>
            {children}
        </settingContext.Provider>
    )
}


export const useSetting = () => {
    const context = useContext(settingContext);

    if(!context) throw Error('Context Error');
    
    return context
}