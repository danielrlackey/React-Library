import React, {useState} from "react"



// this is a functional component.
const Example = () => {


    // this is called "State Hook" it is used 
    // to pass state into a functional component.
    const [count, setCount] = useState(0);


    // the state is then passed into the application
    // and able to be manipulated from there
   
    return (
        <div>
            <p>you clicked {count} times</p>
            <button 
                onClick={() => setCount (count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example;