import Hero from '../components/Hero'
import Stats from '../components/Stats'
import LatestProjects from '../components/LatestProjects'
import CallToAction from '../components/CallToAction'

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <LatestProjects />
      <CallToAction />
    </div>
  )
}

export default Home