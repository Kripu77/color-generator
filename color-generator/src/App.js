import React from 'react'
import "./CSS/style.css"
const App = () => {
    return (
        <main>
            <h1> Color <span> Generator</span></h1>
            <section>
                <form>
                    <label htmlFor='generator'> Color <span> Generator</span></label>
                    <input type="text" id="generator" name="generator"></input>
                    <button> Generate</button>
                </form>
            </section>
        </main>
    )
}

export default App
