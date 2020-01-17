import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment()
    {
        this.setState({
            count:this.state.count+1
        },()=>{console.log(this.state.count)})
    }
    clearcounter()
    {
        this.setState(prevstate=>({
            count:prevstate.count+1
        }),()=>{console.log(this.state.count)})
    }
    clearcounter5()
    {
        this.clearcounter()
        this.clearcounter()
        this.clearcounter()
        this.clearcounter()
        this.clearcounter()
    }
    increment5()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <p>Count-{this.state.count}</p>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.clearcounter()}>clear</button>
                <button onClick={()=>this.clearcounter5()}>clear5</button>
                <button onClick={()=>this.increment5()}>Increment5</button>

            </div>
        )
    }
}

export default Counter
