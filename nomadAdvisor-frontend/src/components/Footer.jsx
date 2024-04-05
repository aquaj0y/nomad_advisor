import Logo from '../assets/logo.png'

export default function Footer() {
  return (
    <div className='footer-flex'>
      <div className='footer-top'>
        <img className='logo footer-logo' src={Logo} />
        <div className='footer-links'>
          <p>About</p>
          <p>About</p>
          <p>About</p>
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

