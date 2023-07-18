import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface  CommentTypeProps {
  content : string
  onDeleteComment : (content:string)=> void
}

export function Comment({ content , onDeleteComment}: CommentTypeProps) {

  const [likeCount,setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(prev => prev + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Gabriel-Aparecido03.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header >
            <div className={styles.authorAndTime}>
              <strong>Gabriel</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:40'> Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{ content } </p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir<span> { likeCount } </span>
          </button>
        </footer>
      </div>
    </div>
  )
}