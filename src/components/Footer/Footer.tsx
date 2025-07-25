import styles from './footer.module.css';


export function FooterCard() {
    return (
      <div className={styles.card}>
        <div>© 2025 PartyBoom!</div>
        <div className={styles.info}>
          <span>Ping: +ping</span>
          <span className={styles.connected}>● Conectado</span>
        </div>
      </div>
    )
  }