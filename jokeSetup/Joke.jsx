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

export default function Joke(props) {
    {console.log(props)}
    return (
        
        <main className='main'>
        { 
            props.setup != null ? 
            (
                <>
                    <p className='setup'><span className="main-text">Setup:</span> {props.setup}</p>
                    <button onClick={
                        <p className='punchline'><span className="main-text">Punchline: </span>{props.punchline}</p>
                    }>Show Joke</button>
                </>
            )
            :
            (<p className='punchline'>{props.punchline}</p>)
            }
        </main>
    )
}