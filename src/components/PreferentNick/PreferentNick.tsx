// import Style from "./preferent-nick.module.css";
import { Modal } from "../Modal/Modal";
import { FormPreferents } from "../Form/FormPreferents";
import { useSetting } from "../../context/SettingContext";
import { useModalContext } from "../Modal/context/UseModalContext";
// import { useLoading } from "../../context/LoadingContext";
export function PreferentNick() {
  const { setState } = useSetting();
  const modalContext = useModalContext();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string 
    const numRandom=Math.random()*9999;
    setState((state)=> ({...state, name:name || `visitante${numRandom}` }));
    modalContext.setState(false);
  };
  return (
    <Modal title="Configura tu nick">
      <FormPreferents onSubmit={handleOnSubmit} />
    </Modal>
  );
}
