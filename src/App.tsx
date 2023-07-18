import styles from './App.module.css';
import { Header } from "./components/Header";
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/pedro-demeu.png',
      name: "Pedro Miguel",
      role: "Desenvolvedor Frontend"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-13 20:42:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: "Maik Brito",
      role: "Instrutor na Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-13 20:44:00'),
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
      <main>
        { posts.map( item => (
          <Post key={item.id} author={ item.author } content= { item.content } publishedAt={ item.publishedAt }/>
        ))}
      </main>
      </div>
    </div>
  )
}

export default App
