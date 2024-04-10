import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import ExplorePage from '../components/ExplorePage'
import ExploreCollections from './ExploreCollections'
import NewCityForm from './NewCityForm'
import CityDetails from './CityDetails'

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/newcity' element={<NewCityForm />} />
        <Route path='/cities/:id' element={<CityDetails />} />
        <Route path='/explore' element=
          {<ExploreCollections />} />
        <Route path='/explore/:collectionType' element={<ExplorePage />} />
      </Routes>
    </div>
  )
}