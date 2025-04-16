/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */
import Joke from '/Joke.jsx'
import jokesData from './data.js'
import React, {useState} from 'react'

export default function App() {
    
    const [jokes, setJokes] = useState(jokesData)
    console.log(jokes)
    return (
        <main className='joke-container'>
        { jokes.map(joke => (
            <>
            <Joke 
                key={joke.id}
                setup={joke.setup}
                punchline={joke.punchline}
            />
            <hr />
            </>
        ))}   
        </main>
    )
}       
    