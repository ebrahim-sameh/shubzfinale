import React from 'react'
import { GoSettings } from 'react-icons/go'
import { HiOutlineMusicNote } from 'react-icons/hi'
import { AiOutlineSound } from 'react-icons/ai'
 
import './PricingAudio.css'
import { Link } from 'react-router-dom'

const PricingAudio = () => {

  const data = [
    {
      id: 1,
      title: 'Book Engineer Session',
      price: '95',
      icon: <GoSettings className='icon' />
    },
    {
      id: 2,
      title: 'Book Producer Session',
      price: '195',
      icon: <HiOutlineMusicNote className='icon' />
    },
    {
      id: 3,
      title: 'Book Assistant Session',
      price: '75',
      icon: <AiOutlineSound className='icon' />
    },
  ]

  return (
    <section className='pricing__audio'>
      <div className="container">
        <h2 className='section__title'>Booking</h2>
        <p className='section__subtitle'>
          Select your session and book online instantly. If you have any
          questions, you give us a call or email us
        </p>
        <div className="audio__booking__content">
          {data.map(box => (
            <Link to='/booking-audio' key={box.id} className='single__book__box'>
              <div>{box.icon}{box.title}</div>
              <p>from <span>${box.price}/hour</span></p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingAudio