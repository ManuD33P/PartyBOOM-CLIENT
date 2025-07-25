import { useEffect, useState } from "react";
import { useSocket } from "../../context/SocketContext";
import { EVENT_EMIT } from "../../const/EVENT_EMIT";
import {UserItem}  from "./Card";
import styles from "./user-list.module.css"
interface IUsers{
    id: string,
    name: string
}

export function ListUser(){
    const [users,setUsers] = useState<IUsers[]>([]);
    const socket = useSocket();


    useEffect(()=>{
        const onListUser = (listUsers:IUsers[]) => {
            setUsers(listUsers);
        }
        
        if(socket?.connected){
            socket.emit(EVENT_EMIT.LIST_USERS)
            socket.on(EVENT_EMIT.LIST_USERS, onListUser);
        }

        return ()=>{
            socket?.off(EVENT_EMIT.LIST_USERS);
        }
    },[socket]);


    return(
        <section className={styles.card}>
         <h2 className={styles.title}>Jugadores Online</h2>
            {
                users.map((u)=>(
                    <UserItem key={u.id} user={u} />
                ))
            }
        </section>  
    )
}