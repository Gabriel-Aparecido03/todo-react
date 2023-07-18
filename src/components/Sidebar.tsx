import styles from './Sidebar.module.css'

import coverImageProfile from '../assets/cover-image-profile.svg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={coverImageProfile} alt="" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/Gabriel-Aparecido03.png" />
        <strong>Lorem ipsum</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href=""><PencilLine size={20}/> Editar seu perfil</a>
      </footer>
    </aside>
  )
}