import { useParams } from 'react-router-dom'
import { useState } from 'react';

export default function NewCityForm() {
  const initialState = {
    cityName: '',
    likeTags: '',
  }

  const [formState, setFormState] = useState(initialState);

  let { id } = useParams()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log()
    setFormState()
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              City Name
            </label>
          </div>
          <div>
            <input type="text" value="City Name" />
          </div>

          <div>
            <label for="inline-full-name">
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
        </form>
      </div>
    </div>
  )
}
