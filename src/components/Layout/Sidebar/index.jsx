import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../../assets/assets/images/logo-s.png'
import LogoSubtitle from '../../../assets/assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <>
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href='"https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"'
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"  className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/Kojo65/'
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"  className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href='"https://www.youtube/channel/Kojo65/"'
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"  className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href='"https://www.skype/Kojo65/"'
          >
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e"  className="anchor-icon"/>
          </a>
        </li>
      </ul>
    </div>
  </>
)

export default Sidebar
