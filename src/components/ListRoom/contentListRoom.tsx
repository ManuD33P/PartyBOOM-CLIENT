import type { ReactNode } from "react"
import styles from "./contentCardList.module.css"

interface ContentCardProps {
  children: ReactNode
}

export function ContentCard({ children }: ContentCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Salas de Juego</h2>
        <button className={styles.createButton}>Crear Sala</button>
      </div>
      {children}
    </div>
  )
}
