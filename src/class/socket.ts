import { io, Socket } from "socket.io-client";

const serverHost = "http://localhost:3000/"

export const socketInstance: Socket = io(serverHost, {autoConnect:false});
