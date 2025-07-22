import {type FormEvent}  from "react"

type Props = {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    className?: string;
}

export function FormPreferents({onSubmit,className}: Props){

    return(
        <form className={className} onSubmit={onSubmit}>
            <input name="name" type="text" placeholder="Ingresar nick"/>
            <button type="submit">Guardar</button>
        </form>
    )
}