import React from 'react'
import DestinationCard from './components/DestinationCard'

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    region: 'Europe',
    mainAttraction: 'Eiffel Tower',
    why: "Iconic architecture, rich cafes and museums — I want to soak in art, stroll the Seine and try iconic French pastries."
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    region: 'Asia',
    mainAttraction: 'Fushimi Inari Shrine',
    why: "Historic temples, traditional tea houses and seasonal gardens — the balance of calm and culture draws me in."
  },
  {
    id: 3,
    name: 'Reykjavík / Iceland',
    region: 'Europe (Arctic)',
    mainAttraction: 'Northern Lights',
    why: "Seeing the aurora borealis and dramatic landscapes (geysers, glaciers) is a once-in-a-lifetime nature dream."
  },
  {
    id: 4,
    name: 'Machu Picchu, Peru',
    region: 'South America',
    mainAttraction: 'Ancient Incan Citadel',
    why: "The combination of history, hiking and breathtaking mountain views makes this a captivating goal."
  }
]

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>My Dream Destinations</h1>
        <p className="tagline">Exploring the world, one dream at a time</p>
      </header>

      <section className="about">
        <h2>About My Travel Dreams</h2>
        <p>
          I’ve always been fascinated by different cultures, landscapes and foods. Travelling helps me
          learn, grow and see the world from new perspectives. I travel to collect experiences,
          meet people, and create stories I can look back on.
        </p>
      </section>

      <section className="destinations">
        <h2>Destinations</h2>
        <div className="cards">
          {destinations.map(d => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </div>
      </section>

      <section className="goals">
        <h2>Travel Goals</h2>
        <ul>
          <li>Visit all 7 continents</li>
          <li>Try local cuisine in at least 10 countries</li>
          <li>Learn basic phrases in 5 languages</li>
        </ul>
      </section>

      <footer className="footer">
        <p>Built with React + Vite — Good luck on your travels!</p>
      </footer>
    </div>
  )
}
