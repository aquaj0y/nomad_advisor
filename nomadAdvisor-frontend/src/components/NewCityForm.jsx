import React from 'react';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

import { FormControl, FormLabel, TextField, Button, InputLabel, Select, MenuItem, OutlinedInput } from '@mui/material';

export default function NewCityForm() {
  const [cityName, setCityName] = React.useState('');
  const [likeTags, setLikeTags] = React.useState([]);

  const initialState = {
    cityName: '',
    likeTags: '',
  }

  const [formState, setFormState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log()
    setFormState()
  }

  const handleChangeCityName = (event) => {
    setCityName(event.target.value);
  };

  const handleChangeLikeTags = (event) => {
    const {
      target: { value },
    } = event;
    setLikeTags(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <div>
      <h2 className='form-title add-city-title'>Add a New City</h2>
      <div className='add-city-form'>
        {/* <form onSubmit={handleSubmit}>
          <div>
            <label>
              City Name
            </label>
          </div>
          <div>
            <input type="text" value="City Name" />
          </div>

          <div>
            <label htmlFor="inline-full-name">
              What do you like about this place?
            </label>
          </div>
          <div>
            <select name='likeTags' multiple>
              <option>Tech Hub</option>
              <option>Wellness</option>
              <option>Nightlife</option>
              <option>Fun</option>
              <option>Nature</option>
              <option>Beach</option>
              <option>Mountain</option>
              <option>Music</option>
              <option>English Speaking</option>
              <option>Safe</option>
            </select>
          </div>
          <button>Submit</button>
        </form> */}

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel htmlFor="city-name">City Name</FormLabel>
            <TextField id="city-name" value={cityName} onChange={handleChangeCityName} label="Enter City Name" variant="outlined" />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="like-tags-label">What do you like about this place?</InputLabel>
            <Select
              labelId="like-tags-label"
              id="like-tags"
              multiple
              value={likeTags}
              onChange={handleChangeLikeTags}
              input={<OutlinedInput label="What do you like about this place?" />}
              renderValue={(selected) => selected.join(', ')}
            >
              <MenuItem value="Tech Hub">Tech Hub</MenuItem>
              <MenuItem value="Wellness">Wellness</MenuItem>
              <MenuItem value="Nightlife">Nightlife</MenuItem>
              <MenuItem value="Fun">Fun</MenuItem>
              <MenuItem value="Nature">Nature</MenuItem>
              <MenuItem value="Beach">Beach</MenuItem>
              <MenuItem value="Mountain">Mountain</MenuItem>
              <MenuItem value="Music">Music</MenuItem>
              <MenuItem value="English Speaking">English Speaking</MenuItem>
              <MenuItem value="Safe">Safe</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained">Submit</Button>
        </form>
      </div>
    </div>
  )
}
