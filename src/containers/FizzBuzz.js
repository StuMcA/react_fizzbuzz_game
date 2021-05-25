import {useState, useEffect} from 'react';

const FizzBuzz = () => {

    const [inputNumber, setNumber] = useState(0);
    const [answer, setAnswer] = useState('');
    const [playerInput, setPlayerInput] = useState('');

    useEffect(()=> {
        if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
            setAnswer("fizzbuzz")
          } else if (inputNumber % 3 === 0) {
            setAnswer("fizz")
          } else if (inputNumber % 5 === 0) {
            setAnswer("buzz")
          } else {
            setAnswer(inputNumber);
          }      
    }, [inputNumber])

    const handleInc = ()=> {
        setNumber(inputNumber + 1);
    }

    

    // const handleFormSubmit = () => {
    //     if (answer.toLowerCase() === playerInput.toLowerCase()) {

    //     }
    // }
    
    return (
        <>
            <h2>{inputNumber}</h2>
            {/* <button value={inputNumber} onClick={handleInc}>Next number</button> */}
            <h3>{answer}</h3>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter answer" value={playerInput} onChange={handlePlayerInputChange}/>
                <input type="submit" value="Submit guess" />
            </form>
            
        </>
    );
}

export default FizzBuzz;