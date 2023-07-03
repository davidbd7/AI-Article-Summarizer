import React from 'react';
import {logo} from '../assets';


const Hero = () => {
    return (
        <header className = "w-full flex justify-center items-center flex-col">
            <nav className = "flex justify-between items-center w-full mb-10 pt-3">
                <img src = {logo} alt="sumz_logo" className = "w-28 object contain" />

                <button
                  type = "button"
                  onClick = {() => window.open('https://github.com/davidbd7')}
                  className = "black_btn">
                      Github

                </button>
            </nav>

            <h1 className = "head_text"> 
                Summarize Articles with <br className = "max-md hidden" />
                <span className = "blue_gradient"> OpenAI GPT-4</span>
                    
                    
            </h1>
            <h2 className = "desc">
                Tired of reading useless history articles for some nonsense GE Classes? 
                This Website will summarize all of that nonsense so you have less nonsense to read!
            </h2>

        </header>
    )
}

export default Hero
