import { Settings, Volume2, Wifi, User, LogOut } from "lucide-react"
import styles from "./controls.module.css"

export function Controls() {
  return (
    <div className={styles.controlsContainer}>
      <div className={styles.leftSection}>
        <h1 className={styles.logo}>PartyBoom!</h1>
        <div className={styles.connectionStatus}>
          <Wifi className={styles.wifiIcon} />
          <span>Conectado</span>
        </div>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.controlButton}>
          <Volume2 size={20} />
        </button>
        <button className={styles.controlButton}>
          <Settings size={20} />
        </button>
        <button className={styles.controlButton}>
          <User size={20} />
        </button>
        <button className={`${styles.controlButton} ${styles.logoutButton}`}>
          <LogOut size={20} />
        </button>
      </div>
    </div>
  )
}