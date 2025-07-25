import { Users, Lock, Trophy } from "lucide-react"
import styles from "./card.module.css"

interface RoomCardProps {
  room: {
    config: {
      timeBomb: number
      idRoom: string
      owner: string
      lifes: number
    }
    players?: {
       name: string,
       id: string
    }
    game?: string
  }
}


export function RoomCard( {room} : RoomCardProps) {
  return (
    <div className={styles.roomCard}>
      <div className={styles.roomHeader}>
        <div className={styles.roomInfo}>
          <div className={styles.roomTitle}>
            <h3>{room.config.idRoom}</h3>
          </div>
          <p className={styles.hostInfo}>Host: {room.config.owner}</p>
        </div>
        <div className={styles.roomStats}>
          <div className={styles.playerCount}>
            <Users className={styles.usersIcon} />
            <span>
              {
              room.players && (<strong>{room.players.name}</strong>)
              }
            </span>
          </div>
          <span className={`${styles.difficulty}`}>{room.config.timeBomb}</span>
        </div>
      </div>

      <div className={styles.roomFooter}>
        <button
          className={`${styles.joinButton}`}
        >
          {"Unirse"}
        </button>
      </div>
    </div>
  )
}