import React from 'react'

export default function DestinationCard({ destination }) {
  return (
    <article className="card">
      <h3>{destination.name}</h3>
      <p className="meta">{destination.region} • {destination.mainAttraction}</p>
      <p className="why">{destination.why}</p>
    </article>
  )
}
