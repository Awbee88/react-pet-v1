import React from 'react'
import classes from './MyButton.module.css'

export default function MyButton({children, active, ...props}) {
  return (
    <button {...props} className={[classes.myBtn, active ? classes.active : ''].join(' ')}>
        {children}
    </button>
  )
}
