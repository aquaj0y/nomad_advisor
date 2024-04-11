import * as React from 'react';
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Grid } from '@mui/material';

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
  const [collectionNameState, setCollectionNameState] = useState('')


  useEffect(() => {
    const getCollection = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/cities/`)
        console.log(response.data)

        const collectionMap = {
          cities: 'City',
          beaches: 'Beach',
          mountains: 'Mountain',
          castles: 'Castle'
        }
        const collectionName = collectionMap[params.collectionType] || ''
        
        setCollectionNameState(collectionName)

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
      <div className='explore-page-title-container'>
        <h1 className='page-title'>{collectionNameState}</h1>
      </div>

      <Grid container spacing={6}
        sx={{padding: '3em'}}
      >
      {data.map((city, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={city.name}>
          <Card sx={{ maxWidth: 345, m: 'auto' }}>
            <CardMedia
              sx={{ height: 200 }}
              image={city.image}
              title={city.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {city.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {city.country}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', padding: '10px 16px', alignItems: 'center' }}>
              {city.review.flatMap((review) => review.tags.slice(0,2).map((tag) => (
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{tag}</span>
              )))}
              <Link to={`/cities/${city.id}`}>
                <Button size="small" variant='outlined'>Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>


    </div>
  )
}