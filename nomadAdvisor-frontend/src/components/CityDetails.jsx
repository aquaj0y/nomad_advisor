import * as React from 'react';
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

// MUI List
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// MUI Box
import { Box, ThemeProvider } from '@mui/material';

// MUI Container
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// IMPORT IMAGES
import Wework from '../assets/wework.jpeg'
import Fora from '../assets/fora.jpeg'
import Coffeeshop from '../assets/coffeeshop.jpeg'

// API Keys 
const googleAPI = import.meta.env.VITE_GOOGLE_API_KEY
const weatherAPI = import.meta.env.VITE_WEATHER_API_KEY


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function CityDetails() {
  let { id } = useParams()
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [cityTags, setCityTags] = useState([])
  const [temp_c, setTemp_c] = useState('')
  const [population, setPopulation] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [callingCode, setCallingCode] = useState('')
  const [currency, setCurrency] = useState('')
  let stop = false

  useEffect(() => {
    const getCityDetails = async () => {
      console.log('Fetching city details...');
      const cityResponse = await axios.get(`http://127.0.0.1:8000/cities/${id}`);
      const cityData = cityResponse.data;
      setCity(cityData);
      setNeighborhood(cityData.neighborhood);
      setCityTags(cityData.review.flatMap(review => review.tags).flat());
  
      if (cityData.name) {
        console.log(`Fetching weather for ${cityData.name}...`);
        const weatherResponse = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${cityData.name}&aqi=no`);
        setTemp_c(weatherResponse.data.current.temp_c);
  
        console.log(`Fetching geo data for ${cityData.name}...`);
        const geoResponse = await axios.get(`http://geodb-free-service.wirefreethought.com/v1/geo/places?limit=5&offset=0&namePrefix=${cityData.name}`);
        if (geoResponse.data.data.length > 0) {
          const geoData = geoResponse.data.data[0];
          setPopulation(geoData.population);
          setCountryCode(geoData.countryCode);
  
          if (geoData.countryCode) {
            console.log(`Fetching country data for ${geoData.countryCode}...`);
            const countryResponse = await axios.get(`http://geodb-free-service.wirefreethought.com/v1/geo/countries/${geoData.countryCode}`);
            const countryData = countryResponse.data.data;
            setCallingCode(countryData.callingCode);
            setCurrency(countryData.currencyCodes[0]);
            stop = true
          }
        }
      }
    };
  
    getCityDetails().catch(console.error);
  }, [stop]);

  return (
    <div>
      <div className='details-title-wrapper'>
        <h1 className='details-title' style={{
        fontSize:'5.5em', paddingLeft: '1.5em'
        }}>{city.name}</h1>
        <h2 className='details-subtitle' style={{ paddingLeft: '5.5em' }}>{city.country}</h2>
      </div>
      <div className='details-container'>
        <React.Fragment>
          <Container
            fixed
            sx={{
              borderRadius: 1.5,
              bgcolor: '#bbd0ff',
              // padding: '-10px'
            }}
          >
      <img className='hero-image' src={city.image}></img>
            <div className='container'
              style={{
                margin: '0 auto',
                width: '90%'
              }}>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                padding='2em'
              >
                <Item>
                  <div>
                  <List sx={{ width: '100%', maxWidth: 360, padding: '2em'}}>
                    {/* Weather */}
                    <ListItem
                      // key={value}
                      disableGutters
                    >
                      <ListItemText primary={`Temperature`} />
                      <ListItemText secondary={temp_c} />
                    </ListItem>
                    
                    {/* CountryCode */}
                    <ListItem
                      // key={value}
                      disableGutters
                    >
                      <ListItemText primary={`Country Code`} />
                      <ListItemText secondary={countryCode} />
                    </ListItem>

                    {/* Population */}
                    <ListItem
                      // key={value}
                      disableGutters
                    >
                      <ListItemText primary={`Population`} />
                      <ListItemText secondary={population} />
                    </ListItem>

                    {/* Internet Speed */}
                    <ListItem
                      // key={value}
                      disableGutters
                    >
                      <ListItemText primary={`Internet Speed`} />
                      <ListItemText secondary={`293`} />
                    </ListItem>
                    
                    {/* Currency */}
                    <ListItem
                      // key={value}
                      disableGutters
                    >
                      <ListItemText primary={`Currency`} />
                      <ListItemText secondary={currency} />
                    </ListItem>

                    {/* Calling Code */}
                    <ListItem
                      // key={value}
                      disableGutters
                    >
                      <ListItemText primary={`Calling Code`} />
                      <ListItemText secondary={callingCode} />
                    </ListItem>


                  </List>
                  </div>
              
                  <h2 className='details-subtitle' style={{padding: '1.5em'}}>Why We Love Here</h2>
                  <div>
                    {/* Tags */}
                    {cityTags.map((tag) => (
                      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{tag}</span>))}
                  </div>
                </Item>
                
            <Item>
              <h2 className='details-subtitle' style={{
                padding: '2em',
                marginLeft: '-1em'
              }} >Best Nomad Neighborhood</h2>
                  
                  {/* Google Maps Embed */}
              {neighborhood ?
              <iframe
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${googleAPI}&q=${neighborhood}`}
                >
              </iframe> : null}

              </Item>
              </Stack>

            {/* ////////////////// ///////////////// */}
              {/* CO-WORKING SPACE */}
              <h2
                className='details-subtitle'
                style={{
                  padding: '2em',
                  marginLeft: '-1em'
                }}
              >Co-working Space</h2>

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
                    image={Wework}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Wework
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
                    image={Fora}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Fora
                    </Typography>
                  </CardContent>
                </Card>
                {/* <Card sx={{
                  maxWidth: 245,
                  disableGutters: true,
                  // fixed: true,
                }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={Coffeeshop}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Your local coffee shop
                    </Typography>
                  </CardContent>
                </Card> */}
              </Box>

                </div>
          </Container>
        </React.Fragment>
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