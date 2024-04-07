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
  const [uniqueTags, setUniqueTags] = useState([])
  const [testUniqueTags, setTestUniqueTags] = useState([])

  // const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    const getCityList = async()=> {
      let response = await axios.get(`http://127.0.0.1:8000/cities/`)

      // console.log(response.data)
      setCityList(response.data)
      console.log('cityList is', cityList)

      // const allTags = response.data.flatMap(city => 
      //   city.review.flatMap(review => review.tags)
      // );
      const allTags = response.data.flatMap(city => 
        city.review.flatMap(review => review.tags)
      );
      console.log('allTags', allTags);
      
      // setUniqueTags([...new Set(allTags)]);
      setUniqueTags([...new Set(allTags)])
      // console.log(uniqueTags);

    }

    getCityList()
  }, [])

  return (
    <div>
      <h2>What's Hot</h2>
      <div className='hot-cities-section'>
      {/* Render Cities */}
      
      {/* MediaCard */}
      {cityList.map((city, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
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
            {uniqueTags.map((tag) => (
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{tag}</span>                
            ))}
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
      </div>
      {/* Review Section */}
      <ReviewForm />
      {/* Pick a Season */}

      
    </div>
  )
}