import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/assets/images/logo-s.png'
import './index.scss'
import {  useState } from 'react'
import AnimatedLetters from '../AnimatedLetter'
import Logo from './Logo'
const Home = () => {
  const [LetterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'a', 'c', ' ', 'M', 'a', 'g', 'b', 'o']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <div className="container  home-page">
      <div className="text-zone">
        <h1 className="white-space">
          <span className={LetterClass}>H </span>
          <span className={`${LetterClass} _12 `} >i, </span>
          <span> </span>
          <span className={`${LetterClass} _13`}> I</span> 
          <span className={`${LetterClass} _14`}>'m </span> <br />
          I
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={LetterClass}
            strArray={nameArray}
            idx={10}
          />
          <br />
          <AnimatedLetters
            letterClass={LetterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>FrontEnd Developer / JavaScript Expert / DataScienisit</h2>
        <Link to="/contact" className="flat-botton">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div>
  )
}

export default Home
