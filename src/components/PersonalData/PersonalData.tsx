import styles from "./personal-data.module.css"
import { useSetting } from "../../context/SettingContext";

export function PersonalDataCard() {

    const setting = useSetting();
    const {name} = setting.state;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Perfil del Jugador</h2>
      <div className={styles.playerInfo}>
        <div className={styles.avatar}>{name.charAt(0)}</div>
        <div className={styles.playerDetails}>
          <h3 className={styles.playerName}>{name}</h3>
          <p className={styles.onlineStatus}>● En línea</p>
        </div>
      </div>
      <div className={styles.playerStats}>
       
        <div className={styles.statRow}>
          <span>Victorias:</span>
          <span className={styles.statWins}>127</span>
        </div>
      </div>
    </div>
  )
}