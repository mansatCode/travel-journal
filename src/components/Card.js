import React from 'react'
import fuji from './assets/fuji.png'
import marker from './assets/marker.png'

const Card = () => {
  return (
    <div>
      <section className="card">
        <img src={fuji} alt="Mt. Fuji"/>
        <div className="card--textContainer">
          <div className="card--locationContainer">
            <img src={marker} alt="marker" className="card--marker"/>
            <p className="card--location">Japan</p>
            <a href="#" className="card--hyperlink">View on Google Maps</a>
          </div>
          <h1 className="card--header">Mount Fuji</h1>
          <p className="card--dates">12 Jan, 2021 - 24 Jan, 2021</p>
          <p className="card--description">Mount Fuji is the highest mountain in Japan at 3,776.24 m (12,389 ft). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </section>
      <hr className="card--divider"></hr>
    </div>
  )
}

export default Card