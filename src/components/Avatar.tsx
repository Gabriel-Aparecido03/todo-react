import styles from './Avatar.module.css'

export function Avatar({ src,hasBorder = true }: { src : string, hasBorder? : boolean}) {
  return (
    <img src={src} alt="" className={hasBorder ? styles.avatarBorder : styles.avatarNoBorder}/>
  )
}