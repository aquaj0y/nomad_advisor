import Logo from '../assets/logo.png'

export default function Footer() {
  return (
    <div className='footer-flex'>
      <div className='footer-top'>
        <img className='logo footer-logo' src={Logo} />
        <div className='footer-links'>
          <a href='https://github.com/aquaj0y'>About</a>
          <a href='https://github.com/aquaj0y'>Github</a>
          <a href='https://www.linkedin.com/in/joy-s-wu'>LinkedIn</a>
        </div>
      </div>

      <div className='footer-bottom'>
        <p className='footer-copy'>© Nomad Advisor 2024</p>
        <div className='footer-terms'>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Cookies</p>
        </div>
      </div>
      
    </div>
  )
}

