import { Socket,io } from "socket.io-client";
import { createContext,useContext,useEffect,useState, type ReactNode } from "react"


const SocketContext = createContext<Socket | null>(null);
const serverHost = "http://localhost:3000";

export function SocketProvider({children}: {children: ReactNode}){
    const [socket, setSocket] = useState<Socket| null>(null);
    
    useEffect(()=>{
        const socketInstance = io(serverHost,{autoConnect:false});
        setSocket(socketInstance);

        return () => {
            socketInstance.disconnect();
        }
    },[]);


    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )

}


export function useSocket(): Socket | null {
    const socket = useContext(SocketContext);
    return socket ;
};