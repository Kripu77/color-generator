import React from 'react'
import rgbToHex from './Utils'

const Singlecolor = ({index, weight, rgb, hexColor }) => {


      const all = [...rgb]
    const hex = rgbToHex(...all)
    console.log(hex)
    return (


      


        <div className='color'>
          <div  className ='colorBoard'style={{backgroundColor:`rgb(${all})`}} >
           <div >
           
              <p className={index>5?'color-light' : 'color-dark'}>{weight}%</p>
              <p className={index>5?'color-light' : 'color-dark'}>{hex}</p>
</div>
          </div>
        </div>
    )
}

export default Singlecolor
