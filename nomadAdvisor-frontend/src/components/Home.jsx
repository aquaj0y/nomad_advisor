import axios from 'axios'
import { useState, useEffect, useContext} from "react"
import UserContext from '../UserContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

// Import Images
import springBg from '../assets/spring.jpg'
import summerBg from '../assets/summer.jpeg'
import fallBg from '../assets/fall.jpeg' 
import winterBg from '../assets/winter.jpeg'

// MUI 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export default function Home() {
  const [cityList, setCityList] = useState([])
  const [uniqueTags, setUniqueTags] = useState([])
  // const { user, setUser } = useContext(UserContext)

  // Add City Form Routes
  let navigate = useNavigate();
  const directForm = () => {
    navigate(`/addcity`)
  }
    
  useEffect(() => {
    const getCityList = async()=> {
      let response = await axios.get(`http://127.0.0.1:8000/cities/`)

      setCityList(response.data)

      const allTags = response.data.flatMap(city => 
        city.review.flatMap(review => review.tags)
      );
      console.log('allTags', allTags);
    
      setUniqueTags([...new Set(allTags)])
      // console.log(uniqueTags);
    }
    getCityList()
  }, [])

  return (
    <div>
      <div className='trending-title-container'>
        <h2 className='bold trending-title'>Trending Cities</h2>
      </div>
      <div className='hot-cities-section' style={{ padding: '1em', paddingBottom: '2em' }}>
        {/* Render Cities */}
        <Grid container spacing={6}>
          {cityList.map((city, index) => (
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

      {/* Review Section */}
      <div className='review-section'>
        <div className='review-title'>
          <h3 style={{ fontSize: '2em'}}>Places You Recommend</h3>
          <h4>Put a new city on the digital nomad map</h4>
        </div>
        <Link to='/newcity'>
          <Button className='button' variant
            ='contained'>
              Add to List
          </Button>
        </Link>
      </div>

      {/* Pick a Season */}
      <h2 style={{
        fontSize: '2em',
        padding: '1em'
      }}>Pick a Season</h2>
      
      <Box
        height={200}
        maxWidth={'80%'}
        my={4}
        sx={{
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: 0.1, 
          paddingBottom: '1em'
      }}>

        <Card sx={{
          maxWidth: 245,
          disableGutters: true,
          // fixed: true,
        }}>
          <CardMedia
            sx={{
              height: 140,
            }}
            image={springBg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Spring
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{
          maxWidth: 245,
          disableGutters: true,
          // fixed: true,
        }}>
          <CardMedia
            sx={{ height: 140 }}
            image={summerBg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Summer
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{
          maxWidth: 245,
          disableGutters: true,
          // fixed: true,
        }}>
          <CardMedia
            sx={{ height: 140 }}
            image={fallBg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fall
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{
          maxWidth: 245,
          disableGutters: true,
          // fixed: true
        }}>
          <CardMedia
            sx={{ height: 140 }}
            image={winterBg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Winter
            </Typography>
          </CardContent>
        </Card>
      </Box>
      </div>

  )
}