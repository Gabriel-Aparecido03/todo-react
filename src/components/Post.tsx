import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState } from 'react';

interface PostProps {
    id?: number;
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    };
    content: {
        type: "paragraph" | "link";
        content: string;
    }[];
    publishedAt: Date;
}

export function Post({ author , content , publishedAt} : PostProps) {

  const [comments,setComments] = useState(['Lorem'])
  const [newCommentText,setNewCommentText] = useState('')

  const isNewCommentEmpty = newCommentText.length === 0;

  const publishedAtDateFormatted = format(publishedAt,"d 'de' LLLL 'ás' HH:mm'h'",{
    locale : ptBR
  })

  const publishedDateRalativeToNow = formatDistanceToNow(publishedAt,{
    locale : ptBR,
    addSuffix:true
  })

  function handlePublisedComment(event : FormEvent) {
    event.preventDefault()
    setComments(prev => [...prev,newCommentText])
    setNewCommentText('')
  }

  function deleteComment(comment:string) {
    const commentsWithoutDeleteOne = comments.filter( item => item !== comment)
    setComments([...commentsWithoutDeleteOne])
  }

  function handleNewCommentInvalid(event:React.ChangeEvent<HTMLTextAreaElement>) {
    event?.target.setCustomValidity('Esse campo é obrigatório!');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{ author.name } </strong>
            <span>{ author.role }</span>
          </div>
        </div>
        
        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}> { publishedDateRalativeToNow } </time>
      </header>

      <div className={styles.content}>
        { content.map ( item => (
          item.type === "link" ? <a href="">{ item.content } </a> : <p>{ item.content } </p>
        ))}
      </div>

      <form action="" className={styles.commentForm} onSubmit={handlePublisedComment}>
        <strong>Deixe seu comentario</strong>
        <textarea 
          onChange={e => setNewCommentText(e.target.value)} 
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />  
        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        { comments.map(item => <Comment onDeleteComment={deleteComment} content={item} key={item}/>)}
      </div>
    </article>
  )
}