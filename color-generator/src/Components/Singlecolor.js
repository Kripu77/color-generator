import React from 'react'

const Singlecolor = ({index, weight, rgb }) => {


      const all = [...rgb]
      console.log(all)
    return (


      


        <div className='color'>
          <div  className ='colorBoard'style={{backgroundColor:`rgb(${all})`}}>
              <h1>{weight}</h1>

          </div>
        </div>
    )
}

export default Singlecolor
