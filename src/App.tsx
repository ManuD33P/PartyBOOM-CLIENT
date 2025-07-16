
import './App.css'
import { useSocket } from './context/SocketContext.tsx';
import { useCallback, useEffect, useState } from 'react';
import { FormPreferents } from './components/index.ts';
import { ListRoom } from './components/ListRoom/ListRoom.tsx';

interface IUserPreferents{
  nick: string;
  id: string;
}
function App() {
  const [stateSocket, setStateSocket] = useState<Boolean>(false);
  const [userPrefernt,setUserPreferent] = useState<IUserPreferents>({
    nick:"",
    id:""
  });

  
  const socket = useSocket();
  const connect = useCallback(()=> {
    socket?.connect();
    socket?.on("connect",()=>{
      const id = socket.id || ""
      setStateSocket(true);
      setUserPreferent((prevPreferents)=> ({...prevPreferents, id:id}))
      socket.emit("room-list");
    })
    
  },[socket]);


  useEffect(()=>{
   connect();
  },[socket])

 const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const nick = data.get("nick") as string;
  setUserPreferent((prevProps) => ({
    ...prevProps,
    nick: nick
  }))
}
 
 
  if(!socket) return  <p>Cargando socket...</p>

    return (
      <>
      <p>Socket State:{ JSON.stringify(stateSocket) }</p>
      <FormPreferents onSubmit={onSubmit}></FormPreferents>
      <ListRoom />
      </>
    )
  

}

export default App
