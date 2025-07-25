import { ListRoom } from '../ListRoom/ListRoom';
import { ContentCard } from '../ListRoom/contentListRoom';
import { ListUser } from '../ListUser/ListUser';
import { Controls } from '../Controls/Controls';
import { FooterCard } from '../Footer/Footer';
import styles from './appInterface.module.css';
import { PersonalDataCard } from '../PersonalData/PersonalData';

export function AppInterface(){


return(
    <main className={styles.contentApp}>
    <div className={styles.header}>
       <Controls/>
    </div>
    <div className={styles.personalData}>
        <PersonalDataCard/>
    </div>
    <div className={styles.listUser}>
        <ListUser />
    </div>
    <div className={styles.content}>
        <ContentCard>
            <ListRoom/>
        </ContentCard>
    </div>
    <div className={styles.footer}>
           <FooterCard />
    </div>
  </main>
)
}