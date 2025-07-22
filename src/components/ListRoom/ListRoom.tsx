import { useEffect, useState } from "react"
import { useSocket } from "../../context/SocketContext"
import Style from "./listRoom.module.css";

export function ListRoom(){
    const [listRoom, setListRoom] = useState<[]>([]);
    const socket = useSocket();

    useEffect(()=>{
            socket?.on("room-list",(data:any)=>{
                console.log('recibio listRoom:',data)
                setListRoom(data)
            });

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
                <article key={room.config.idRoom}>
                    {JSON.stringify(room)}
                </article>)
            }
        </section>
    )
}