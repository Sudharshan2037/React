import React, { Component } from 'react'

 class Eventbind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:'hello'
         }
         this.method=this.method.bind(this)
     }
     
     method()
     {
         this.setState({
             message:"good bye!!!!"
         })
     }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.method}>click</button>
            </div>
        )
    }
}

export default Eventbind
