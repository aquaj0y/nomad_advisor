import Logo from '../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

// MUI
import MenuHeader from './MenuHeader';



export default function Header() {
  return (
    <div className='header'>
      <div className='header-nav'>
        <Link to='/' className='header-logo-container'>
          <img className='logo header-logo' src={Logo} />
          <h2 className='header-logo logo-text'>Nomad Advisor</h2>
        </Link>
        <h3 className='explore'>Explore</h3>
      </div>

      <CiSearch id='search-icon' size={30} />

      {/* <MenuHeader /> */}
    </div>
  )
}