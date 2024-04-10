import * as React from 'react';
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Link } from 'react-router-dom'


// MUI MediaCard
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ExplorePage() {
  let params = useParams();
  console.log('what is params', params)

  const [data, setData] = useState([])


  useEffect(() => {
    const getCollection = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/cities/`)
        console.log(response.data)

        const collectionMap = {
          cities: 'City',
          beaches: 'Beach'
        }
        const collectionName = collectionMap[params.collectionType] || ''
        
        if (collectionName) {
          const placesArr = response.data.filter((place) => place.collection === `${collectionName}`)
          console.log('what is placesArr', placesArr)
          setData(placesArr)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getCollection()
  }, [params.collectionType])


  return (
    <div>
      {data.map((city, index)=>(
        <Card
          key={index}
          sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={city.image}
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
            {city.review.map((review)=> review.tags.slice(0,1).map((tag) => (
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{tag}</span>
            )))}
            <Link to={`/cities/${city.id}`}>
              <Button size="small" variant='outlined' >Learn More</Button>
            </Link>
          </CardActions>
        </Card>      
      ))}

    </div>
  )
}