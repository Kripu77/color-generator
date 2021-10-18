import React,{useState} from 'react'
import {ToastContainer, toast} from "react-toastify";
  import 'react-toastify/dist/ReactToastify.css';
  import Values from 'values.js'
import Singlecolor from './Components/Singlecolor';

import "./CSS/style.css"
const App = () => {
    const [value, setValue] = useState('')
    const[error, setError] = useState(false);
    const[list, setList] =useState([])
    console.log(Values)

    //prevents default behaviour
    const handleSubmit = (e)=>{

e.preventDefault();
try{
let colors = new Values(value).all(10)
console.log(colors)
setList(colors)
console.log(value)}
catch(error){
    setError(true)
    toast.error("The value is not acceptable, Please pass in the HEX value")
}
// setValue([Values]);
// console.log(value)
    }
    return (
        <main>
            <h1> Color <span> Generator</span></h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='generator'> Color <span> Generator</span></label>
                    <input type="text" id="generator" name="generator" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='#222'></input>
                    <button type='submit'> Generate</button>
                </form>
            </section>
            <ToastContainer/>
            <section className='color-pallate'>
{list.map((value, index)=>{
    
    return <Singlecolor key={index} {...value} index={index}/>
})}
            </section>
        </main>
    )
}

export default App
