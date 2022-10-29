import React from 'react'
import Nava from '../components/navbar/Navi'
import sen from './avatar.jpg'
const About = () => {
  return (
    <div>
      <Nava/>
      <div className='fg'>
       <img style={{
        width:"25vh",
    height: "25vh",
    borderRadius:"50%",
    objectFit: "cover"
       }} src={sen} alt="İmage" />
    <h1>Hi, my name is Ethem</h1>
    <h2>Fun facts about me:</h2>
    <ul>
      <li>29 years old</li>
      <li>Live in Turkey</li>
      <li>I'm unemployed.</li>
    </ul>
    <p>
        I code because I love building and launching products. Coding is a way for me to do that every single day
      <a href="https://www.linkedin.com/in/ethem-kizilyer-691024241/" target="_blank"
        >Linkedln here</a
      >
    </p>
    <input id="ilk" type="text" placeholder="Enter email..." /> <br/>
    <button className='btn btn-info'>Join newsletter</button>
    </div>
    </div>
  )
}

export default About