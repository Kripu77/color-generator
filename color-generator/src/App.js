import React,{useState} from 'react'
import {ToastContainer, toast} from "react-toastify";
  import 'react-toastify/dist/ReactToastify.css';
  import Values from 'values.js'

import "./CSS/style.css"
const App = () => {
    const [value, setValue] = useState('')
    const[error, setError] = useState(false);
    const[list, setList] =useState([])

    //prevents default behaviour
    const handleSubmit = (e)=>{
e.preventDefault();
    }
    return (
        <main>
            <h1> Color <span> Generator</span></h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='generator'> Color <span> Generator</span></label>
                    <input type="text" id="generator" name="generator" value={value} onChange={(e)=>setValue(e.target.value)}></input>
                    <button type='submit'> Generate</button>
                </form>
            </section>
            <section className='color-pallate'>

            </section>
        </main>
    )
}

export default App
