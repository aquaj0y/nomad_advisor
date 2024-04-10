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
let {city}  = useParams
  return (
    <div>
      This is ExplorePage Component
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
            {city.review.map((review)=> review.tags.slice(0,1).map((tag) => (
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{tag}</span>
            )))}
            <Link to={`/cities/${city.id}`}>
              <Button size="small" variant='outlined' >Learn More</Button>
            </Link>
          </CardActions>
        </Card>
    </div>
  )
}