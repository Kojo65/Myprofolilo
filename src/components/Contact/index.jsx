import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetter'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss'

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Isaac Kojo
          <br />
          Magbo,
          <br />
          Lapez(7th & 10 Gust House)-Accra 19, 2012 <br />
          Ghana <br />
          <br />
          <span>magboisaac390@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer
             center={[5.611050433263694, -0.2631945422263805]} // Centered at Isaac's location
             zoom={13}
          >
             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[5.611050433263694, -0.2631945422263805]}>
              <Popup>Isaac lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />  
    </>
  )
}

export default Contact
