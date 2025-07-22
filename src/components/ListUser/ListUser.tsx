import { useEffect, useState } from "react";
import { useSocket } from "../../context/SocketContext";
import { EVENT_EMIT } from "../../const/EVENT_EMIT";
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
            socket.on(EVENT_EMIT.LIST_USERS, onListUser);
        }

        return ()=>{
            socket?.off(EVENT_EMIT.LIST_USERS);
        }
    },[socket?.connected]);


    if(!users.length) return "No hay usuarios en linea";

    return(
        <section>
            {
                users.map((u)=>(
                    <article id={u.id} key={u.id}>
                        <p>{u.name}</p>
                    </article>
                ))
            }
        </section>
    )
}