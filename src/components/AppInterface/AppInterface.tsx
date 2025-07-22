import { ListRoom } from '../ListRoom/ListRoom';
import { ListUser } from '../ListUser/ListUser';
import { Controls } from '../Controls/Controls';
import Style from './appInterface.module.css';

export function AppInterface(){


return(
    <main className={Style.contentApp}>
        <div className={Style.header}>
            <Controls />
        </div>
        <div className={Style.personalData}>PERSONAL DATA</div>
        <div className={Style.listUser}>
            <ListUser />
        </div>
        <div className={Style.content}>
            <ListRoom />
        </div>
        <div className={Style.footer}>FOOTER</div>
    </main>
)
}