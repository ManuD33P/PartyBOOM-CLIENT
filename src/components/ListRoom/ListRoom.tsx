import { useEffect, useState } from "react"
import { useSocket } from "../../context/SocketContext"
import Style from "./listRoom.module.css";
import { RoomCard } from "./Card";
import { EVENT_EMIT } from "../../const/EVENT_EMIT";

export function ListRoom(){
    const [listRoom, setListRoom] = useState<[]>([]);
    const socket = useSocket();

    useEffect(()=>{

        if(socket?.connected){
            socket.emit(EVENT_EMIT.ROOM_LIST)
            socket?.on(EVENT_EMIT.ROOM_LIST,(data:any)=>{
                console.log('recibio listRoom:',data)
                setListRoom(data)
            });
        }

            return ()=> {
                socket?.off('room-list')
            }
    },[socket])


    if(!listRoom.length){
        return (
            <section className={Style.content}>
                <p>No hay salas abiertas</p>
            </section>
        );
    }
    
    return(
        <section className={Style.conent}>
            {
            listRoom.map((room:any)=> 
                <RoomCard key={room.idRoom} room={room} />
                )
            }
        </section>
    )
}