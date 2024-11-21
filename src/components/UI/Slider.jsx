import React from 'react'
import classes from './slider.module.css'
import img from '../../assets/meals.jpg'

const Slider = () => {
  return (
    <div className={classes.slider}>
        <img src={img} alt="image" />
    </div>
  )
}

export default Slider