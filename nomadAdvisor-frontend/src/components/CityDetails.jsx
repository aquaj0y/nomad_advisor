import * as React from 'react';
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

const googleAPI = import.meta.env.VITE_GOOGLE_API_KEY


export default function CityDetails() {
  // let { name } = useParams()
  let { id } = useParams()
  const[city, setCity] = useState('')
  
  useEffect(() => {
    const getCityDetails = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/cities/${id}`)
      
      // let response = await axios.get(`http://127.0.0.1:8000/cities/`)
  
      // response.data.filter()
      setCity(response.data)
  
      console.log(response.data)
    }
  
    getCityDetails()
    
  }, [id])

  const getWeather = async () => {
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`)

    console.log(response)
  }

  return (
    <div>
      {/* SWIPER */}

      <div>
        <h1>{city.name}</h1>
        <h2>{city.country}</h2>
        <div>
          {/* Data */}
        </div>
        <h2>Why We Love Here</h2>
        <div>
          {/* Tags */}

          {/* {city.review.map(
            (review) => review.tags.slice(0, 6).map(
              (tag) => (<h3>{tag}</h3>)))} */}
        </div>

        <h2>Best Nomad Neighborhood</h2>
        {/* Google Maps Embed */}
        <iframe
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${googleAPI}&q=Roma Nte.`}
          allowfullscreen>
        </iframe>
        <h2>Co-working Space</h2>
      </div>
    </div>
  )
}