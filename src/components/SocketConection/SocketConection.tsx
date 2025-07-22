import { useSocket } from "../../context/SocketContext"


export  function SocketConection(){
    const socket = useSocket();

    const handleConnect = ()=> {
        socket?.connect();
    }

    const handleDisconnect = ()=>{
        socket?.disconnect();
    }

    return (
        <>
         <button onClick={handleConnect}>Conectar</button>
         <button onClick={handleDisconnect}>Desconectar</button>
        </>
    )
}