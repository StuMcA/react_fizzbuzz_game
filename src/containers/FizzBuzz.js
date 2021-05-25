import {useState, useEffect} from 'react';

const FizzBuzz = () => {

    const [number, setNumber] = useState(0);
    const [answer, setAnswer] = useState('');

    useEffect(()=> {
        if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
            setAnswer("fizzbuz")
          } else if (inputNumber % 3 === 0) {
            setAnswer("fizz")
          } else if (inputNumber % 5 === 0) {
            setAnswer("buzz")
          } else {
            setAnswer(inputNumber);
          }      
    })

    const handleInc = ()=> {
        setNumber(number + 1);
    }
    
    return (
        <>
            <h2>{number}</h2>
            <button value={number} onClick={handleInc}>Next number</button>
        </>
    );
}

export default FizzBuzz;