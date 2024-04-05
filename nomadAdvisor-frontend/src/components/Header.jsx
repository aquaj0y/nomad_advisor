import Logo from '../assets/logo.png'
import { CiSearch } from "react-icons/ci";

// MUI
import MenuHeader from './MenuHeader';



export default function Header() {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img className='logo' src={Logo} />
        <h2>Nomad Advisor</h2>
        <h3 className='explore'>Explore</h3>
      </div>

      <CiSearch id='search-icon' size={30} />

      <MenuHeader />
    </div>
  )
}