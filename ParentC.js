import React, { Component } from 'react'
import Childc from './Childc'
 class ParentC extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"sud2037"
         }
         this.call=this.call.bind(this)
     }
     
     call()
     {
         alert(`hello   ${this.state.message}`)
     }
    render() {
        return (
            <div>
                <Childc method={this.call}/>
            </div>
        )
    }
}

export default ParentC
