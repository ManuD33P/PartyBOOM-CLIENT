
import './App.css'
import { useSocket } from './context/SocketContext.tsx';
import {  useEffect } from 'react';
import { useModalContext } from './components/Modal/context/UseModalContext.ts';
import { PreferentNick } from './components/PreferentNick/PreferentNick.tsx';
import { useSetting } from './context/SettingContext.tsx';
import { useLoading } from './context/LoadingContext.tsx';
import { EVENT_EMIT } from './const/EVENT_EMIT.ts';
import { AppInterface } from './components/AppInterface/AppInterface.tsx';

function AppIntial() {
  const socket = useSocket();
  const preferent = useSetting();
  const modal = useModalContext();
  const { isLoading, setLoading } = useLoading();
  
  const getPreferents = ()=>{
    setLoading(true);
    const preferentState = preferent.state;
    console.log('valor de preferentState: ', preferentState.name);
    if(!preferentState.name){
      const storePreferents = localStorage.getItem('preferent');
      if(storePreferents){
        const objectStorePreferents = JSON.parse(storePreferents);
        if(objectStorePreferents.name) 
          return preferent.setState(objectStorePreferents);
      }
      return modal.setState(true);
    }

    localStorage.setItem("preferent",JSON.stringify(preferent.state));

    //Comprobar si existe una idRoom activa y redigirlo a la room. Si no, solo conectar el socket.

    if(!socket?.connected){
      socket?.connect();
      socket?.emit(EVENT_EMIT.SETNAME,preferentState.name);
    }
  }
  useEffect(()=>{
    getPreferents();

    const onConnect = () => {
      if(socket?.connected){
          setLoading(false);
      }
    }
    socket?.on("connect",onConnect);

    return()=>{
      socket?.off("connect")
    }
  },[preferent.state])

  
  if(modal.state) return <PreferentNick />
  
  if(isLoading)  return (<p>Loading...</p>)


  return <AppInterface/>
  
  
}


export default AppIntial
