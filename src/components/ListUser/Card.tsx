// import { Crown, Gamepad2 } from "lucide-react"
import styles from "./user-item.module.css"

interface UserItemProps {
  user: {
    id: string
    name: string
  }
}

export function UserItem({ user }: UserItemProps) {
  return (
    <div className={styles.userItem}>
      <div className={styles.userAvatar}>
        <div className={styles.avatar}>{user.name.charAt(0)}</div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userName}>
          <span>{user.name}</span>
        </div>
        <div className={styles.userLevel}>
        </div>
      </div>
    </div>
  )
}