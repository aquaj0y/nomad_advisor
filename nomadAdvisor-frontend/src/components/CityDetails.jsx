import * as React from 'react';
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios, { all } from 'axios'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

// MUI Box
import { Box, ThemeProvider } from '@mui/material';

// MUI Container
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const googleAPI = import.meta.env.VITE_GOOGLE_API_KEY

export default function CityDetails() {
  // let { name } = useParams()
  let { id } = useParams()
  const [city, setCity] = useState('')
  const [cityTags, setCityTags] = useState([])
  
  useEffect(() => {
    const getCityDetails = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/cities/${id}`)
      
      // let response = await axios.get(`http://127.0.0.1:8000/cities/`)
  
      // response.data.filter()
      setCity(response.data)
      
      let allTags = response.data.review.flatMap(review => (review.tags.flatMap(tag => tag)))
      // setCityTags([...new Set(allTags)])
      setCityTags(allTags)

      console.log(response.data)
      console.log(allTags)
      console.log('cityTags is', cityTags)
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
      {console.log('cityTags here', cityTags)}
      <div className='details-container'>

        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <h1 className='details-title'>{city.name}</h1>
            <h2 className='details-subtitle'>{city.country}</h2>
            
            <div>
            {/* Data */}
            </div>
            
            <h2 className='details-subtitle'>Why We Love Here</h2>
            
            <div>
              {/* Tags */}

              {cityTags.map((tag) => (
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{tag}</span>))}
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
            >
          </iframe>
          <h2>Co-working Space</h2>
          </Container>
        </React.Fragment>

        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: '#007FFF',
                dark: '#0066CC',
              },
            },
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          />
        </ThemeProvider>
      </div>
      
      {/* Review Section */}
      <div className='review-section city-review'>
        <div className='review-title'>
          <h4>Let us know</h4>
          <h3 style={{ fontSize: '2em' }}>{`What do you think of ${city.name}`}</h3>
        </div>
        <Link to='/newcity'>
          <Button className='button' variant
            ='contained'>
              Write Review
          </Button>
        </Link>
      </div>
    </div>
  )
}