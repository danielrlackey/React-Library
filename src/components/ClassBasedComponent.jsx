import React from "react";


// class based component 
class Alpha extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    // render has to be used
    render() {
        return (
            <div>
                <p>you clicked {this.state.count} times</p>
                <button 
                    onClick={() => this.setState
                    ({ count: this.state.count + 1})
                }>
                Click me!
                </button>
            </div>
        );
    }
} 

export default Alpha;