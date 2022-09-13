import React from 'react'
import './Home.css';

export default function Home() {
  return (
    <section className='home' id='home'>
    <div className='content'>
        <h3>Fresh coffee in the morning</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, error voluptatibus qui corporis consequatur possimus est sequi, suscipit natus nemo dolorem ad aliquam! Eligendi suscipit facilis a at, soluta consequatur.</p>
        <a href="/menu" className='btn'>get your now</a>
    </div>
    </section>
  )
}
