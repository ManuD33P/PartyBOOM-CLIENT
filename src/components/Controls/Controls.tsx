import Style from './controls.module.css';


export function Controls(){

    return (
        <section className={Style.contentControls}>
            <button>Crear Sala</button>
            <button>Configurar Perfil</button>
        </section>
    )
}