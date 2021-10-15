import React from 'react'

const Singlecolor = ({index, weight, rgb, hex }) => {


      const all = [...rgb]
      console.log(all)
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
