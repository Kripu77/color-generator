import React,{useState} from 'react'
import "./CSS/style.css"
const App = () => {
    const [value, setvalue] = useState('')

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
                    <input type="text" id="generator" name="generator"></input>
                    <button type='submit'> Generate</button>
                </form>
            </section>
        </main>
    )
}

export default App
