import React from "react"
type Props = {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function FormPreferents({onSubmit}: Props){

    return(
        <form onSubmit={onSubmit}>
            <label>Nick Name:</label>
            <input id="nick" type="text" />
            <button type="submit">Ingresar</button>
        </form>
    )
}