import React,{useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import rgbToHex from './Utils'

const Singlecolor = ({index, weight, rgb, hexColor }) => {

const [alert, setAlert] = useState(false);
      const all = [...rgb]
      //invoking the converting fn
    const hex = rgbToHex(...all)
    //check
    // console.log(hex)
    
    //useEffect to clear the repeated toast if we select mulltiple items
    
    useEffect(()=>{
      setTimeout(()=>{
        setAlert(false)
      }, 1000)
    },[alert])
    //dependecny set to alert

    //toast message to user when alert changes to true
    if(alert==true){
      toast.success(`${hex} value copied`)
    }
    return (


      


        <div className='color'>
          <div  className ='colorBoard'style={{backgroundColor:`rgb(${all})`}} onClick={()=>{
            setAlert(true);
            navigator.clipboard.writeText(hex)
          }}>
           <div >
           
              <p className={index>5?'color-light' : 'color-dark'}>{weight}%</p>
              <p className={index>5?'color-light' : 'color-dark'}>{hex}</p>
</div>
          </div>
        </div>
    )
}

export default Singlecolor
