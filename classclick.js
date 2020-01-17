import React, { Component } from 'react'

class Classclick extends Component {
    
    call()
    {
        console.log('clicked')
    }
    render() {

     
        return (
            <div>
                <button onClick={()=>this.call()}>cclick</button>
            </div>
        )
    }
}

export default Classclick
