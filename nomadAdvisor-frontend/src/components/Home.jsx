import axios from 'axios'
import ReviewForm from "./ReviewForm"
import { useState, useEffect, useContext} from "react"
import UserContext from '../UserContext'
import MediaCard from './MediaCard'



// MUI MediaCard
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Home() {
  const [cityList, setCityList] = useState([])
  // const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    const getCityList = async()=> {
      let response = await axios.get(`http://127.0.0.1:8000/cities/`)
      setCityList(response.data)

      console.log(cityList)
    }

    getCityList()
  }, [])

  return (
    <div>
      <h2>What's Hot</h2>
      {/* Render Cities */}

      {/* MediaCard */}
      {cityList.map((city, index) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            // sx={{ height: 140 }}
            image={city.image}
            // title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {city.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {city.country}
            </Typography>
          </CardContent>
          <CardActions>
            {/* {city.review.map((tag, index) => (
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{tag}</span>              
            ))} */}

            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
      {/* <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        // sx={{ height: 140 }}
        // image=""
        // title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Badge</span>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}
      

      {/* {
        cityList.map((city) => (
          <div>
            <h2>{city.name}</h2>
            <h4>{city.country}</h4>
            
            <h4>temperature</h4>
            <
          </div>
        ))
      } */}

      {/* Review Section */}
      <ReviewForm />
      {/* Pick a Season */}

      
    </div>
  )
}