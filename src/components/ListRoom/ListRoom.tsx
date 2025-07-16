import { useEffect, useState } from "react"
import { useSocket } from "../../context/SocketContext"


export function ListRoom(){
    const [listRoom, setListRoom] = useState<any>([]);
    const socket = useSocket();

    useEffect(()=>{
            socket?.on("room-list",(data:any)=>{
                console.log(`recibio list rooms: ${data}`)
                setListRoom(data)
            });
    },[socket])


    return(
        <>
            {listRoom.map((room:any)=> 
                <div key={room.config.idRoom}>
                    {JSON.stringify(room)}
                </div>
            )}
        </>
    )
}