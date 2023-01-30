import React from 'react'
import marker from './assets/marker.png'
import fuji from './assets/fuji.png'

const Card = (props) => {
  return (
    <div>
      <section className="card">
        <img src={require(`./assets/${props.imageUrl}`)} alt={props.title} className="card--image"/>
        <div className="card--textContainer">
          <div className="card--locationContainer">
            <img src={marker} alt="marker" className="card--marker"/>
            <p className="card--location">{props.location}</p>
            <a href={props.googleMapsUrl} rel="noreferrer"  target="_blank" className="card--hyperlink">View on Google Maps</a>
          </div>
          <h1 className="card--header">{props.title}</h1>
          <p className="card--dates">{props.startDate} - {props.endDate}</p>
          <p className="card--description">{props.description}</p>
        </div>
      </section>
      {props.id !== 3 && <hr class="card--divider"/>}
    </div>
  )
}

export default Card