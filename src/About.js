import React from 'react'
import Hero from './Hero'

const About = () => {
  return (
    <>
    <Hero text="ABout us"/>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
               <p className='lead'>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               </p>
            </div>
        </div>

    </div>
    </>
  )
}

export default About
