import React from 'react'
import rgbToHex from './Utils'

const Singlecolor = ({index, weight, rgb, hexColor }) => {


      const all = [...rgb]
    const hex = rgbToHex(...all)
    console.log(hex)
    return (


      


        <div className='color'>
          <div  className ='colorBoard'style={{backgroundColor:`rgb(${all})`}}>
              <p>{weight}%</p>
              <p>{hex}</p>

          </div>
        </div>
    )
}

export default Singlecolor
