import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>

      <TwitterFollowCard userName='codejoss' initialIsFollowing>
        Josue Quevedo
      </TwitterFollowCard>
      
      <TwitterFollowCard userName='freddier' initialIsFollowing>
        Freddy Vega
      </TwitterFollowCard>
      
      <TwitterFollowCard userName='gndx'>
      Oscar Barajas
      </TwitterFollowCard>
    </section>
  )
  } 