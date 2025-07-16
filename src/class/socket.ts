import { io, Socket } from "socket.io-client";

const serverHost = "http://localhost:3000/"
export class SocketInstance{
    private static instance:Socket;
    private constructor(){}

    public static getInstance(): Socket{
        if(!SocketInstance.instance){
            SocketInstance.instance = io(serverHost);
            console.log('valor de la instance',SocketInstance.instance);
        }
        return SocketInstance.instance
    }
}

