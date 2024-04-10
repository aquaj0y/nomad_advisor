import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import beachesBg from '../assets/beaches.jpeg'
import citiesBg from '../assets/cities.jpeg'
import castlesBg from '../assets/castles.jpeg'
import mountainsBg from '../assets/mountains.jpeg'



export default function ExploreCollections() {
  const navigate = useNavigate()
  
  return (
    <div>
      <h1 className='page-title'>Discover Something New</h1>
        
      <Box
        className='collection-containter'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '60%',
            height: '30vh',
          },
        }}
      >
        {/* <Container maxWidth={'xl'}> */}

        <Link to={`/cities/${city.id}`}>
        <Paper
          // justifyContent="center"
          // alignItems="center"
          sx={{
            backgroundImage: `url(${beachesBg})`,
            backgroundPosition: 'center'
        }}
        >
          <h2 className='section-title'>Beaches</h2>
          </Paper>
        </Link>

        <Link to={`/collections`}>
          <Paper
            onClick={()=>navigate(`/collections/${collection}`)}
            sx={{
              backgroundImage: `url(${citiesBg})`,
              backgroundPosition: 'center'
          }}
          >
          <h2 className='section-title'>Cities</h2>
          </Paper>
        </Link>

        <Paper
          sx={{
            backgroundImage: `url(${castlesBg})`,
            backgroundPosition: 'center'
        }}
        >
          <h2 className='section-title'>Castles</h2>
        </Paper>
        <Paper
          sx={{
            backgroundImage: `url(${mountainsBg})`,
            backgroundPosition: 'center'
        }}
        >
          <h2 className='section-title'>Mountains</h2>
        </Paper>
        {/* </Container> */}
      </Box>
    </div>
  )
}