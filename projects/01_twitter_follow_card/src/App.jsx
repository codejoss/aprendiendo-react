import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'codejoss',
    name: 'Josue Quevedo',
    isFollowing: true
  },
  {
    userName: 'maripydev',
    name: 'Maripy',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false
  },
  {
    userName: 'freddier',
    name: 'Freddy Vega',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}